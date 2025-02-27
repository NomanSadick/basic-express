import express, { Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import router from "./app/routes";
import errorHandler from "./app/middlewares/errorHandler";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.use("/api", router);

// Home Route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Product API");
});

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
