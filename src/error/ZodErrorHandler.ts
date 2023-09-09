import { ZodError, ZodIssue } from "zod";
import { IGenericErrorResponse } from "../interfaces/ErrorResponst";
import { IGenericErrorMessage } from "../interfaces/Error";

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });

  const statusCode = 400;
  return {
    success: false,
    statusCode,
    message: "Validation Error",
    errorMessages: errors,
  };
};

export const ZodErrorHandler = { handleZodError };
