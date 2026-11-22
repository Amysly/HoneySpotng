import express from "express"
import {checkout} from '../controller/checkoutController.js'
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/checkout", protect, checkout);

export default router