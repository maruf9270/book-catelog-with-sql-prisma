import { IGenericErrorMessage } from "./Error";

export type IGenericErrorResponse = {
  success: boolean;
  statusCode: number;
  errorMessages: IGenericErrorMessage[];
  message: string;
};
