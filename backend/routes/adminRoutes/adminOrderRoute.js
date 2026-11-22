import express from "express";
import {
     getOrderByAdmin,
     getOrderByIdAdmin,
    createOrderByAdmin,
     updateOrderStatus ,
     cancelOrderByAdmin
    } from '../../controller/adminController/adminOrderController.js'
import { protect } from "../../middleware/authMiddleware.js";
import { admin } from "../../middleware/adminMiddleWare.js";

const router = express.Router()

router.get("/", protect, admin, getOrderByAdmin),
router.post("/", protect, admin,  createOrderByAdmin),
router.get("/:id", protect,admin,  getOrderByIdAdmin)
router.put("/:id/status", protect, admin, updateOrderStatus);
router.put("/:id/cancel", protect,admin, cancelOrderByAdmin);

export default router