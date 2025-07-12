import AppError from "../utils/AppError.js";

const errHandler = async (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
    });


  } else if (process.env.NODE_ENV === "production") {
    // Production environment: Send generalized messages for security
    let error = { ...err };

    if (error.isOperational) {
      res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });
    } else {
      // Send a generic message for programming or unexpected errors
      console.error("Error:", error); // Log the error for server-side debugging
      res.status(500).json({
        status: "error",
        message: "Something went wrong!",
      });
    }
  }
};

export default errHandler;
