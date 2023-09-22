import { RequestHandler } from "express";
import { BookService } from "./book.service";
import { ResponseSender } from "../../../helper/ResponseSender";
import httpStatus from "http-status";
import pick from "../../shared/pick";
import paginationFields, { BookFilterAbleFileds } from "./book.constant";

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

// For finding book by category id
const findBookByCatId: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.categoryId;
    const result = await BookService.findByCatId(id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Books with associated category data fetched successfully",
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};
// Get sngle by id
const getSingleBookByID: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BookService.getSingleByid(id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Book fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Delete book by id
const deleteSIngleBOok: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BookService.deleteSIngleByID(id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Books deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// For gtting all the books with paginated data

const getAllWithPaginated: RequestHandler = async (req, res, next) => {
  try {
    const filters = pick(req.query, [
      "search",
      "category",
      "minPrice",
      "maxPrice",
    ]);

    const paginationOptions = pick(req.query, [
      "page",
      "size",
      "sortBy",
      "sortOrder",
    ]);
    console.log(filters, paginationOptions);
    const result = await BookService.fetchWIthPaginated(
      filters,
      paginationOptions
    );
    ResponseSender.responseSender(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book retrieved successful",
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};
export const BookController = {
  createNewBook,
  updateBOok,
  findBookByCatId,
  getSingleBookByID,
  deleteSIngleBOok,
  getAllWithPaginated,
};
