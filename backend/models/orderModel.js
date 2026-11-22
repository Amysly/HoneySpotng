
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        orderItems: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                size: {
                    type: String,
                    //required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                },
                price: {
                    type: Number,
                    required: true,
                    min: 0
                }
            }
        ],

        shippingAddress: {
            fullName: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            }
        },


        itemsPrice: {
            type: Number,
            required: true,
            min: 0
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0
        },
        totalPrice: {
            type: Number,
            required: true,
            min: 0
        },

        paymentMethod: {
            type: String,
            default: "Paystack"
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed", "refunded"],
            default: "pending"
        },
        paymentReference: {
            type: String,
            default: null
        },
        paidAt: {
            type: Date,
            default: null
        },


        orderStatus: {
            type: String,
            enum: [
                "pending",
                "processing",
                "shipped",
                "delivered",
                "cancelled"
            ],
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
