const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allproductSchema = new Schema({
    product_title: { type: String },
    description: { type: String },
    category: { type: String },
    sub_category: { type: String },
    brand: { type: String },
    image: { type: String },
    price: { type: Number },
    sell_price: { type: Number },
})

module.exports = mongoose.model('Allproduct', allproductSchema)