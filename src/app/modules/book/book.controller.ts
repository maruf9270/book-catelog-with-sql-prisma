import { RequestHandler } from "express";
import { BookService } from "./book.service";
import { ResponseSender } from "../../../helper/ResponseSender";
import httpStatus from "http-status";

// For new book
const createNewBook: RequestHandler = async (req, res, next) => {
  try {
    const result = await BookService.postNewBook(req.body);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Book Created successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// For updating
const updateBOok: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BookService.updateBook(req.body, id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Book updated successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const BookController = { createNewBook, updateBOok };
