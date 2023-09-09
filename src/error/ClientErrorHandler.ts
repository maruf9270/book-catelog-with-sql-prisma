import { Prisma } from "@prisma/client";
import { IGenericErrorMessage } from "../interfaces/Error";

const clentErrorHandler = (error: Prisma.PrismaClientKnownRequestError) => {
  let errors: IGenericErrorMessage[] = [];
  let message = "";
  const statusCode = 400;

  if (error.code === "P2025") {
    message = (error.meta?.cause as string) || "Record not found!";
    errors = [
      {
        path: "",
        message,
      },
    ];
  } else if (error.code === "P2003") {
    if (error.message.includes("delete()` invocation:")) {
      message = "Delete failed";
      errors = [
        {
          path: "",
          message,
        },
      ];
    }
  }

  return {
    success: false,
    statusCode,
    message,
    errorMessages: errors,
  };
};

export const ClientErrorHandler = { clentErrorHandler };
