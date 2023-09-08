import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (req, res, next, error) => {};

export const GlobalErrorHandler = { globalErrorHandler };
