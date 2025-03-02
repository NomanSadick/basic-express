import { Router } from "express";
import { productRoute } from "../modules/products/product.Routes";
import { userRoute } from "../modules/user/user.route"; // Import user routes
import authRoute from "../modules/auth/auth.routes"; 

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
  {
    path: "/auth", // Add authentication route
    route: authRoute,
  }
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
