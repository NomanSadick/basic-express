import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const { user, token }: any = req.user;
    res.json({ user, token });
  }
);

router.get(
  "/linkedin",
  passport.authenticate("linkedin", { scope: ["r_emailaddress", "r_liteprofile"] })
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", { session: false }),
  (req, res) => {
    const { user, token }: any = req.user;
    res.json({ user, token });
  }
);

export default router;
