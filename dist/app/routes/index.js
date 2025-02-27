"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_Routes_1 = __importDefault(require("../modules/products/product.Routes"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/products",
        route: product_Routes_1.default,
    },
];
moduleRoutes.forEach(({ path, route }) => {
    router.use(path, route);
});
exports.default = router;
