const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, "Please enter product name"],
            default: 0
        },
        avatarimg: {
            type: String,
            require: true,
            default: 0
        },
        content: {
            type: String,
            require: true,
            default: 0
        },
        img: {
            type: String,
            require: false
        },
    },
    {
        Timestamp: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;