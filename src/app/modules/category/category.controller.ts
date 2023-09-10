import { RequestHandler } from "express";
import { CategoryService } from "./category.service";
import { ResponseSender } from "../../../helper/ResponseSender";
import httpStatus from "http-status";

const createCategory: RequestHandler = async (req, res, next) => {
  try {
    const result = await CategoryService.postCategory(req.body);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Category created succssfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// FOr updata
const updateCategory: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const result = await CategoryService.update(req.body, req.params.id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Category Updated successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//For getting all
const getAllCAt: RequestHandler = async (req, res, next) => {
  try {
    const result = await CategoryService.getAll();
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Categories featched successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//For getting single
const getSingleCAt: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await CategoryService.getSingle(id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "category featched successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

//For delet
const deleteCat: RequestHandler = async (req, res, next) => {
  try {
    const result = await CategoryService.deleteSinlge(req.params.id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Category deleted successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CategoryController = {
  createCategory,
  updateCategory,
  getAllCAt,
  deleteCat,
  getSingleCAt,
};
