import express from 'express';
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js';
import { errorHandler } from './middleware/errorHandling.js';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import adminUserRoute from './routes/adminRoutes/adminUserRoute.js'
import orderRoute from './routes/orderRoute.js'
import adminOrderRoute from './routes/adminRoutes/adminOrderRoute.js'
import cartRoute from './routes/cartRoute.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/api/products', productRoutes);
app.use('/api/auth', authRoute)
app.use("/api/admin", adminUserRoute );
app.use ("/api/orders", orderRoute)
app.use ("/api/admin/order", adminOrderRoute)
app.use('/api/cart', cartRoute)

//404 fallback
app.use((req, res, next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});


app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})