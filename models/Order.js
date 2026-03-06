const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    value: { type: Number, required: true },
    creationDate: { type: Date, default: Date.now },
    items: [itemSchema]
});

module.exports = mongoose.model('Order', orderSchema);
