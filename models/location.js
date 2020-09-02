const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    content: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
}, {
    timestamps: true
});

const locationSchema = new Schema({
    name: String,
    lat: {
        type: Schema.Types.Decimal128,
    },
    long: {
        type: Schema.Types.Decimal128,
    },
    reviews: [reviewSchema],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Location', locationSchema);