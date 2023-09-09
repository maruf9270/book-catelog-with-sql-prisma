import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { GlobalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { RootRoute } from "./app/routes/routes";

export const app = express();
export const port = process.env.PORT || 5000;

// Using cors
app.use(cors());

// Using parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using Cookie parser
app.use(cookieParser());

// Using root route for routing
app.use("/api/v1", RootRoute.router);

// Using Global error handler
app.use(GlobalErrorHandler.globalErrorHandler);
