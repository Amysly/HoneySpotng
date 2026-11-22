
import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";

// @desc   Admin registers a new user
// @route  POST /api/admin/user

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body || {};

    if (!name || !email || !password || !role) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        res.status(409);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        role
    });

    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
});

export default { registerUser };
