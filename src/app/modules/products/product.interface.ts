import { Document } from "mongoose";

export interface IProduct extends Document {
  ProductName: string;
  ProductCode: string;
  Img?: string;
  UnitPrice: number;
  Qty: number;
  TotalPrice: number;
}
