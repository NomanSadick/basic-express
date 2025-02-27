"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const productModel_1 = __importDefault(require("./productModel")); // Assuming you have a Product model
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield productModel_1.default.find();
});
exports.getAllProducts = getAllProducts;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield productModel_1.default.findById(id);
});
exports.getProductById = getProductById;
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new productModel_1.default(productData);
    return yield product.save();
});
exports.createProduct = createProduct;
const updateProduct = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield productModel_1.default.findByIdAndUpdate(id, productData, { new: true });
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield productModel_1.default.findByIdAndDelete(id);
});
exports.deleteProduct = deleteProduct;
