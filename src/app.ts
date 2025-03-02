import express, { Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import router from "./app/routes"; // Assuming you have routes set up
import errorHandler from "./app/middlewares/errorHandler"; // Error handling middleware
import jwtStrategy from "./app/modules/auth/passport"; // JWT strategy
import passport from "passport";
import "./app/modules/auth/googleStrategy";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Passport middleware
app.use(passport.initialize());

// Routes
app.use("/api", router); // Assuming your routes are prefixed with /api

// Home Route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Product API");
});
// Protected Route
app.get("/profile",passport.authenticate("jwt", { session: false }),(req: Request, res: Response) => {
    res
      .status(200)
      .json({
        message: "You have access to this protected route!",
        user: req.user,
      });
  }
);
// Use JWT strategy for passport
passport.use(jwtStrategy);

// Not Found Route Handler
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    message: "Not Found",
  });
});

// Error Handling Middleware
app.use(errorHandler);

export default app;
