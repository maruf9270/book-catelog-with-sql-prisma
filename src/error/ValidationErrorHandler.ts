import { Prisma } from "@prisma/client";
import { IGenericErrorResponse } from "../interfaces/ErrorResponst";

const validationErrorHanlder = (
  error: Prisma.PrismaClientValidationError
): IGenericErrorResponse => {
  const errors = [
    {
      path: "",
      message: error.message,
    },
  ];
  const statusCode = 400;
  return {
    success: false,
    statusCode,
    message: "Validation Error",
    errorMessages: errors,
  };
};

export const ValidationErrorHandler = { validationErrorHanlder };
