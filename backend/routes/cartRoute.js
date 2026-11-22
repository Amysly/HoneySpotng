import express from "express";
import {
     addToCart,
       removeProductFromCart,
       getMyCart,
       updateCartQuantity,
        clearCart

 } from "../controller/cartController.js";
 import { protect } from "../middleware/authMiddleware.js";

 const router = express.Router();

 router.post('/',protect,  addToCart);
  router.get('/',protect,   getMyCart);
  router.delete("/clear", protect, clearCart);
    router.patch("/:productId/quantity", protect, updateCartQuantity);
 router.delete('/remove/:productId',protect,   removeProductFromCart)

 export default router