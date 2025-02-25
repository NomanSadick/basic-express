import { Router } from "express";
import productRoute from "../modules/products/routes/productRoutes.js"; // Default import

const router = Router();

const moduleRoutes = [
    {
        path: "/products",
        route: productRoute
    }
];

moduleRoutes.forEach(({ path, route }) => {
    router.use(path, route);
});

export default router;
