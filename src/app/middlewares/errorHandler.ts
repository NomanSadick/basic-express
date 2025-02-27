import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;
  let message = "Something went wrong";

  if (err.name === "ValidationError") {
    statusCode = httpStatus.BAD_REQUEST;
    // Collect all the error messages from the validation error
    message = Object.values(err.errors)
      .map((error: any) => {
        // Create a specific message for each missing field
        return `${error.path}: ${error.message}`;
      })
      .join(", ");
  } else if (err.name === "CastError") {
    statusCode = httpStatus.NOT_FOUND;
    message = `Resource not found: ${err.value}`;
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};


export default errorHandler;
