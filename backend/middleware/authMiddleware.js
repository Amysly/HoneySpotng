
import dotenv from 'dotenv';
dotenv.config();
import { jwtVerify } from "jose";
import User from "../models/userModel.js";
import { JWT_SECRET } from "../utils/getJwtSecret.js";

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not authorized, no token provided"
      });
    }

    const token = authHeader.split(" ")[1];

    const { payload } = await jwtVerify(token, JWT_SECRET);

    const user = await User.findById(payload.userId)
      .select("_id name email role");

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    req.user = user;

    next();

  } catch (err) {
    console.log("Authentication error:", err.message);

    const message = err.code === "ERR_JWT_EXPIRED"
      ? "Access token expired. Refresh the token and retry."
      : "Not authorized, token failed";

    return res.status(401).json({ message });
  }
};
