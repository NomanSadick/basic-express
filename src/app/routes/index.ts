import { Router } from "express";
import { productRoute } from "../modules/products/product.Routes";
import { userRoute } from "../modules/user/user.route"; // Import user routes

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: productRoute,
  },
  {
    path: "/user",
    route: userRoute, // Add user routes
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
