
import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import Cart from "../models/cartModel.js";

const checkout = asyncHandler(async (req, res) => {
    const { shippingAddress } = req.body;

    const { fullName, phone, address, city } = shippingAddress || {};

    if (!fullName || !phone || !address || !city) {
        res.status(400);
        throw new Error("Please provide all shipping details");
    }

    const cart = await Cart.findOne({
        user: req.user._id
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {
        res.status(400);
        throw new Error("Your cart is empty");
    }

    const validatedOrderItems = [];
    let itemsPrice = 0;
    let preparationTime = 0;

    for (const item of cart.items) {
        const product = item.product;

        if (!product) {
            res.status(404);
            throw new Error("A product in your cart no longer exists");
        }

        const quantity = item.quantity;

        if (!Number.isInteger(quantity) || quantity < 1) {
            res.status(400);
            throw new Error("Invalid product quantity");
        }

        let selectedPrice;
        let selectedSize;

        if (product.sizes && product.sizes.length > 0) {

            const selectedVariant = product.sizes.find(
                (variant) => variant.name === item.size
            );

            if (!selectedVariant) {
                res.status(400);
                throw new Error(
                    `Selected size is unavailable for ${product.name}`
                );
            }

            selectedPrice = selectedVariant.price;
            selectedSize = selectedVariant.name;

        } else {
            selectedPrice = product.price;
            selectedSize = "Standard";
        }

        if (
            typeof selectedPrice !== "number" ||
            !Number.isFinite(selectedPrice) ||
            selectedPrice < 0
        ) {
            res.status(400);
            throw new Error(`Invalid price for ${product.name}`);
        }

        itemsPrice += selectedPrice * quantity;

        validatedOrderItems.push({
            product: product._id,
            name: product.name,
            size: selectedSize,
            quantity,
            price: selectedPrice
        });

        const productPreparationTime = product.preparationTime || 0;

        preparationTime = Math.max(
            preparationTime,
            productPreparationTime
        );
    }

    const shippingPrice = 0;
    const totalPrice = itemsPrice + shippingPrice;

    const order = await Order.create({
        user: req.user._id,
        orderItems: validatedOrderItems,
        shippingAddress: {
            fullName,
            phone,
            address,
            city
        },
        preparationTime,
        itemsPrice,
        shippingPrice,
        totalPrice
    });

    cart.items = [];
    await cart.save();

    res.status(201).json({
        message: "Checkout successful. Order created and awaiting payment.",
        order
    });
});

export { checkout };
