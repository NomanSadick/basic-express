import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "./user.model";

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticateJWT = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};
