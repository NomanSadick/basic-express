import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    ProductName: { type: String, required: true },
    ProductCode: { type: String, required: true },
    Img: { type: String },
    UnitPrice: { type: Number, required: true },
    Qty: { type: Number, required: true, default: 1 },
    TotalPrice: { type: Number, required: true },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model<IProduct>("Product", productSchema);
export default ProductModel;
