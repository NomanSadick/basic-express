import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    ProductName: { type: String, required: true }, // Camera 2
    ProductCode: { type: String, required: true }, // 132
    Img: { type: String }, // camera 2
    UnitPrice: { type: Number, required: true }, // 350
    Qty: { type: Number, required: true, default: 1 }, // 1
    TotalPrice: { type: Number, required: true }, // 350
  },
  { versionKey: false }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
