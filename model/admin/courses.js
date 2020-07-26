const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: { type: String },
    dec: { type: String },
    image: { type: String },
    video_path: { type: String },
    category: { type: String },
    item_id: { type: Schema.Types.ObjectId, ref: 'Item' },
    price: { type: Number }
})

module.exports = mongoose.model('Course', courseSchema)