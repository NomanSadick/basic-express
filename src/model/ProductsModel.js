const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
    {
        ProductName: { type: String, required: true },
        ProductCode: { type: String, required: true },
        Img: { type: String },
        UnitPrice: { type: Number, required: true },
        Qty: { type: Number, required: true },
        TotalPrice: { type: Number, required: true },
        CreatedDate: { type: Date, default: Date.now }
    },
    { versionKey: false }
);

const ProductsModel = mongoose.model("products", DataSchema);
module.exports = ProductsModel;
