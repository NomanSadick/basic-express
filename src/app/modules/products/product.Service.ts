import Product from "./product.Model"; // Assuming you have a Product model

export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id: string) => {
  return await Product.findById(id);
};

export const createProduct = async (productData: any) => {
  const product = new Product(productData);
  return await product.save();
};

export const updateProduct = async (id: string, productData: any) => {
  return await Product.findByIdAndUpdate(id, productData, { new: true });
};

export const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};