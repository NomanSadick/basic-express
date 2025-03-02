import { Router } from "express";
import { register, login } from "./user.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export const userRoute = router;

