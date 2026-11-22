
import express from "express";
import mongoose from "mongoose";
import Product from "../models/productModel.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleWare.js";
import upload from "../middleware/uploadMiddleware.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// Validate product sizes
const validateSizes = (sizes) => {
    if (!Array.isArray(sizes) || sizes.length === 0) {
        return false;
    }

    return sizes.every((item) =>
        item &&
        typeof item === "object" &&
        !Array.isArray(item) &&
        item.size &&
        typeof item.size === "string" &&
        item.size.trim() !== "" &&
        item.price !== undefined &&
        Number.isFinite(Number(item.price)) &&
        Number(item.price) >= 0 &&
        item.countInStock !== undefined &&
        Number.isInteger(Number(item.countInStock)) &&
        Number(item.countInStock) >= 0
    );
};

const parseSizes = (sizes) => {
    if (Array.isArray(sizes)) {
        return sizes;
    }

    if (typeof sizes !== "string") {
        throw new Error("Sizes must be a valid JSON array");
    }

    return JSON.parse(sizes);
};

// GET all products - public
router.get("/", async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        next(err);
    }
});

// GET product by ID - public
router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400);
            throw new Error("Invalid product ID");
        }

        const product = await Product.findById(id);

        if (!product) {
            res.status(404);
            throw new Error("Product not found");
        }

        res.json(product);
    } catch (err) {
        next(err);
    }
});

// CREATE product - admin only
router.post(
    "/",
    protect,
    admin,
    upload.single("image"),
    async (req, res, next) => {
        let uploadedImage;

        try {
            if (req.file) {
                uploadedImage = {
                    url: req.file.path,
                    public_id: req.file.filename
                };
            }

            const { name, description, category } = req.body;

            let { sizes } = req.body;

            if (!name || !description || !category) {
                res.status(400);
                throw new Error("Please provide all required fields");
            }

            try {
                sizes = parseSizes(sizes);
            } catch {
                res.status(400);
                throw new Error('Sizes must be a valid JSON array, e.g. [{"size":"Small","price":10,"countInStock":5}]');
            }

            if (!validateSizes(sizes)) {
                res.status(400);
                throw new Error("Please provide valid product sizes, prices and stock quantities");
            }

            if (!uploadedImage?.url || !uploadedImage.public_id) {
                res.status(400);
                throw new Error("Please upload a product image");
            }

            const product = await Product.create({
                user: req.user._id,
                name,
                description,
                category,
                sizes,
                image: uploadedImage
            });

            res.status(201).json(product);

        } catch (err) {
            if (uploadedImage?.public_id) {
                await cloudinary.uploader.destroy(uploadedImage.public_id);
            }

            next(err);
        }
    }
);

// DELETE product - admin only
router.delete("/:id", protect, admin, async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400);
            throw new Error("Invalid product ID");
        }

        const product = await Product.findById(id);

        if (!product) {
            res.status(404);
            throw new Error("Product not found");
        }

        if (product.image?.public_id) {
            await cloudinary.uploader.destroy(product.image.public_id);
        }

        await product.deleteOne();

        res.json({
            message: "Product deleted successfully"
        });

    } catch (err) {
        next(err);
    }
});

// UPDATE product - admin only
router.put(
    "/:id",
    protect,
    admin,
    upload.single("image"),
    async (req, res, next) => {
        let newImage;

        try {
            if (req.file) {
                newImage = {
                    url: req.file.path,
                    public_id: req.file.filename
                };
            }

            const { id } = req.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(400);
                throw new Error("Invalid product ID");
            }

            const product = await Product.findById(id);

            if (!product) {
                res.status(404);
                throw new Error("Product not found");
            }

            const { name, description, category } = req.body;
            let { sizes } = req.body;

            if (!name || !description || !category) {
                res.status(400);
                throw new Error("Please provide all required fields");
            }

            try {
                sizes = parseSizes(sizes);
            } catch {
                res.status(400);
                throw new Error('Sizes must be a valid JSON array, e.g. [{"size":"Small","price":10,"countInStock":5}]');
            }

            if (!validateSizes(sizes)) {
                res.status(400);
                throw new Error("Please provide valid product sizes, prices and stock quantities");
            }

            product.name = name;
            product.description = description;
            product.category = category;
            product.sizes = sizes;

            if (req.file) {
                if (!newImage?.url || !newImage.public_id) {
                    res.status(400);
                    throw new Error("Please upload a valid product image");
                }

                const oldImagePublicId = product.image?.public_id;

                product.image = newImage;

                await product.save();

                // Delete old image after successful database update
                if (oldImagePublicId) {
                    await cloudinary.uploader.destroy(oldImagePublicId);
                }

                return res.json(product);
            }

            const updatedProduct = await product.save();

            res.json(updatedProduct);

        } catch (err) {
            // Clean up newly uploaded image if update fails
            if (newImage?.public_id) {
                await cloudinary.uploader.destroy(newImage.public_id);
            }

            next(err);
        }
    }
);

export default router;
