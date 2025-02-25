import Product from "../models/productModel.js";

export const getAllProducts = async () => await Product.find();
export const getProductById = async (id) => await Product.findById(id);
export const createProduct = async (data) => await Product.create(data);
export const updateProduct = async (id, data) => await Product.findByIdAndUpdate(id, data, { new: true });
export const deleteProduct = async (id) => await Product.findByIdAndDelete(id);
