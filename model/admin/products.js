const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String },
    dec: { type: String },
    auther: { type: String },
    ttime_hrs: { type: Number },
    price: { type: Number },
    videos: [
        {
            path: { type: String, require: true },
            title: { type: String, require: true },
            dec: { type: String, require: true },
            timeMin: { type: String }
        }
    ],
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Product', productSchema)