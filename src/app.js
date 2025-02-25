import express from "express";
import cors from "cors";
import router from "./app/routes/index.js";
import httpStatus from "http-status"; // Import http-status

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Welcome to Product API");
});

// Not Found Route Handler
const notFoundRouteHandler = (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({ 
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    message: "Not Found",
  });
};

// Use the Not Found Route Handler
app.use(notFoundRouteHandler);

export default app;
