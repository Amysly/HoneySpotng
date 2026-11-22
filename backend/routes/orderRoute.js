
import express from "express";
import {
     createOrder,
     getOrderById,
    getAllMyOrders,
    cancelOrder
 } from "../controller/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/my-orders", protect,  getAllMyOrders  );
router.get("/:id", protect,  getOrderById );
router.put("/:id/cancel", protect, cancelOrder);


export default router;
