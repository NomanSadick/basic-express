import jwt from "jsonwebtoken";
import config from "../config";

export const generateToken = (payload: {
    userId: string
}) => {
  return jwt.sign( payload , config.jwtSecret as string, {
    expiresIn: config.jwtExpiresIn as string,
  });
};
