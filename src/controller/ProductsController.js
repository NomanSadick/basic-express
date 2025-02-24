const ProductsModel = require("../model/ProductsModel");

// C = Create
// exports.CreateProduct = async (req, res) => {
//   try {
//     const newProduct = await ProductsModel.create(req.body);
//     res.status(201).json({ status: "success", data: newProduct });
//   } catch (err) {
//     res.status(400).json({ status: "fail", message: err.message });
//   }
// };

exports.CreateProduct = async (req, res) => {
    try{
        const newProduct = await ProductsModel.create(req.body);
        res.status(201).json({status: "success", data: newProduct});
    }catch(err){
        res.status(400).json({status: "fail", message: err.message});
    }
}


// R = Read
exports.ReadProduct = async (req, res) => {
  try {
    const products = await ProductsModel.find({}, "ProductName ProductCode Img UnitPrice Qty TotalPrice");
    res.status(200).json({ status: "success", data: products });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// RD = Read Product Details
exports.ReadProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await ProductsModel.findById(productId);

    if (!product) {
      return res.status(404).json({ status: "fail", message: "Product not found" });
    }

    res.status(200).json({ status: "success", data: product });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// U = Update
exports.UpdateProduct = async (req, res) => {
  try {
    const updatedProduct = await ProductsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ status: "fail", message: "Product not found" });
    }

    res.status(200).json({ status: "success", data: updatedProduct });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// D = Delete
exports.DeleteProduct = async (req, res) => {
  try {
    const deletedProduct = await ProductsModel.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ status: "fail", message: "Product not found" });
    }

    res.status(200).json({ status: "success", message: "Product deleted successfully" });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};
