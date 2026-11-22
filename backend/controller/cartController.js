
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";


const getMyCart = asyncHandler(async (req, res) => {

    const myCart = await Cart.findOne({
        user: req.user._id
    }).populate("items.product", "name price sizes category");

    if (!myCart) {
        return res.status(200).json({
            message: "Your cart is empty",
            cart: {
                items: [],
                totalPrice: 0
            }
        });
    }

    let totalPrice = 0;

    for (const item of myCart.items) {
        const product = item.product;

        let price;

        if (product.sizes && product.sizes.length > 0) {
            const selectedVariant = product.sizes.find(
                (variant) => variant.size === item.size
            );

            price = selectedVariant ? selectedVariant.price : 0;
        } else {
            price = product.price;
        }

        totalPrice += price * item.quantity;
    }

    res.status(200).json({
        message: "Cart items retrieved successfully",
        cart: myCart,
        totalPrice
    });
});


const updateCartQuantity = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const { quantity, size } = req.body;

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

    let selectedSize = "Standard";

    if (product.sizes && product.sizes.length > 0) {
        if (!size) {
            res.status(400);
            throw new Error("Please select a size");
        }

        const selectedVariant = product.sizes.find(
            (variant) => variant.size === size
        );

        if (!selectedVariant) {
            res.status(400);
            throw new Error("Selected size is not available");
        }

        selectedSize = selectedVariant.size;
    }

    const cart = await Cart.findOne({
        user: req.user._id
    });

    if (!cart) {
        res.status(404);
        throw new Error("Cart not found");
    }

    const cartItem = cart.items.find(
        (item) =>
            item.product.toString() === productId &&
            item.size === selectedSize
    );

    if (!cartItem) {
        res.status(404);
        throw new Error("Product not found in your cart");
    }

    cartItem.quantity = quantity;

    await cart.save();

    await cart.populate(
        "items.product",
        "name price sizes category"
    );

    res.status(200).json({
        message: "Cart quantity updated successfully",
        cart
    });
});



const addToCart = asyncHandler(async (req, res) => {
    const { product: suppliedProduct, productId: suppliedProductId, size, quantity = 1 } = req.body;
    const productValue = suppliedProductId ?? suppliedProduct;
    const productId = typeof productValue === "string"
        ? productValue
        : productValue && typeof productValue === "object" && typeof productValue._id === "string"
            ? productValue._id
            : undefined;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        res.status(400);
        throw new Error("Provide productId (or product) as the product's MongoDB _id");
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

    let selectedSize = "Standard";

    if (product.sizes && product.sizes.length > 0) {
        if (!size) {
            res.status(400);
            throw new Error("Please select a size");
        }

        const selectedVariant = product.sizes.find(
            (variant) => variant.size === size
        );

        if (!selectedVariant) {
            res.status(400);
            throw new Error("Selected size is not available");
        }

        selectedSize = selectedVariant.size;
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        cart = await Cart.create({
            user: req.user._id,
            items: []
        });
    }

    const existingItem = cart.items.find(
        (item) =>
            item.product.toString() === productId &&
            item.size === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({
            product: product._id,
            size: selectedSize,
            quantity
        });
    }

    await cart.save();

    await cart.populate("items.product", "name price sizes category");

    res.status(200).json({
        message: "Product added to cart successfully",
        cart
    });
});

const removeProductFromCart = asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const { size } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        res.status(400);
        throw new Error("Invalid product ID");
    }

    const cart = await Cart.findOne({
        user: req.user._id
    });

    if (!cart) {
        res.status(404);
        throw new Error("Cart not found");
    }

    const itemExists = cart.items.some(
        (item) =>
            item.product.toString() === productId &&
            item.size === (size || "Standard")
    );

    if (!itemExists) {
        res.status(404);
        throw new Error("Product not found in your cart");
    }

    cart.items = cart.items.filter(
        (item) =>
            !(
                item.product.toString() === productId &&
                item.size === (size || "Standard")
            )
    );
    await cart.save();
    await cart.populate("items.product", "name price sizes category");

    res.status(200).json({
        message: "Product removed from cart successfully",
        cart
    });
});

const clearCart = asyncHandler(async (req, res) => {

    const cart = await Cart.findOne({
        user: req.user._id
    });

    if (!cart) {
        res.status(404);
        throw new Error("Cart not found");
    }

    cart.items = [];

    await cart.save();

    res.status(200).json({
        message: "Your cart has been cleared successfully",
        cart
    });
});


export { 
    addToCart,
     removeProductFromCart,
     getMyCart,
     updateCartQuantity,
     clearCart
};
