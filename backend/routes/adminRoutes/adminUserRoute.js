import express from "express";
import adminUserController from "../../controller/adminController/adminUserController.js";
import { protect } from "../../middleware/authMiddleware.js";
import { admin } from "../../middleware/adminMiddleware.js";

const router = express.Router();

router.post(
    "/user",
    protect,
    admin,
    adminUserController.registerUser
);

export default router;