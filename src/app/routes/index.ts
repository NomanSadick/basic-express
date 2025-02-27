import { Router } from "express";
import { productRoute } from "../modules/products/product.Routes";


const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoute,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;

