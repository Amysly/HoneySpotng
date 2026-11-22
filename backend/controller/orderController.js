
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

const getAllMyOrders  = asyncHandler(async (req, res) => {
    const orders = await Order.find({
        user:req.user._id
    }).sort({createdAt: -1});   
     res.status(200).json({
        message: "Orders retrieved successfully",
        orders
    }); 
})

const getOrderById  = asyncHandler(async (req,res) => {
    const {id} = req.params

     if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400);
            throw new Error('Invalid order ID')
        }
        const order = await Order.findById(id);
        if(!order){
            res.status(404);
            throw new Error('order not found')
        }
        if (order.user._id.toString () !== req.user._id.toString()) {
            res.status(403)
            throw new Error("you are not authorised to view this order");    
        }
        res.status({
            message: "order retrieved successfully",
            order
        })
})


const createOrder = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress } = req.body;

    if (!Array.isArray(orderItems) || orderItems.length === 0) {
        res.status(400);
        throw new Error("Your order must contain at least one product");
    }

    const { fullName, phone, address, city } = shippingAddress || {};

    if (!fullName || !phone || !address || !city) {
        res.status(400);
        throw new Error("Please provide all shipping details");
    }

    const validatedOrderItems = [];
    let itemsPrice = 0;

    for (const item of orderItems) {
        const { product: productId, size, quantity } = item;

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            res.status(400);
            throw new Error("Invalid product ID");
        }

        if (!Number.isInteger(quantity) || quantity < 1) {
            res.status(400);
            throw new Error("Quantity must be a positive whole number");
        }

        const product = await Product.findById(productId);

        if (!product) {
            res.status(404);
            throw new Error("Product not found");
        }

        let selectedPrice;
        let selectedSize;

        
        if (product.sizes && product.sizes.length > 0) {

            if (!size) {
                res.status(400);
                throw new Error(`Please select a size for ${product.name}`);
            }

            // Find selected size
            const selectedVariant = product.sizes.find(
                (variant) => variant.size === size
            );

            if (!selectedVariant) {
                res.status(400);
                throw new Error(`Selected size is unavailable for ${product.name}`);
            }

            // Check stock availability
            if (selectedVariant.countInStock < quantity) {
                res.status(400);
                throw new Error(`Insufficient stock for ${product.name} (${size})`);
            }

            selectedPrice = selectedVariant.price;
            selectedSize = selectedVariant.size;

        } else {
            // Handle fixed-price products
            selectedPrice = product.price;
            selectedSize = "Standard";

            if (product.countInStock < quantity) {
                res.status(400);
                throw new Error(`Insufficient stock for ${product.name}`);
            }
        }

        // Validate price
        if (
            typeof selectedPrice !== "number" ||
            !Number.isFinite(selectedPrice) ||
            selectedPrice < 0
        ) {
            res.status(400);
            throw new Error(`Invalid price for ${product.name}`);
        }

        // Calculate item price
        itemsPrice += selectedPrice * quantity;

        // Save validated order item
        validatedOrderItems.push({
            product: product._id,
            name: product.name,
            size: selectedSize,
            quantity,
            price: selectedPrice
        });
    }

    // Calculate shipping and total price
    const shippingPrice = 0;
    const totalPrice = itemsPrice + shippingPrice;

    // Create order
    const order = await Order.create({
        user: req.user._id,
        orderItems: validatedOrderItems,
        shippingAddress: {
            fullName,
            phone,
            address,
            city
        },
        itemsPrice,
        shippingPrice,
        totalPrice
    });

    res.status(201).json({
        message: "Order created successfully. Awaiting payment.",
        order
    });
});
const cancelOrder = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error("Invalid order ID");
    }

    const order = await Order.findById(id);

    if (!order) {
        res.status(404);
        throw new Error("Order not found");
    }

    if (order.user.toString() !== req.user._id.toString()) {
        res.status(403);
        throw new Error("You are not authorized to cancel this order");
    }

    if (order.orderStatus !== "pending") {
        res.status(400);
        throw new Error("Only pending orders can be cancelled");
    }

    order.orderStatus = "cancelled";

    const cancelledOrder = await order.save();

    res.status(200).json({
        message: "Order cancelled successfully",
        order: cancelledOrder
    });
});


export { createOrder,
        getOrderById,
        getAllMyOrders,
        cancelOrder
 };