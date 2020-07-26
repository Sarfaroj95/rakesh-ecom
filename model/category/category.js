const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category_name: {
        type: String,
        min: [4, 'Too short, short 4 character'],
        max: [100, 'To long, Max is 32 character '],
    },
    createdAt: { type: Date, default: Date.now },

})

module.exports = mongoose.model('Category', categorySchema)