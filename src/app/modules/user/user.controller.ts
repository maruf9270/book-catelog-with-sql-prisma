import { RequestHandler } from "express";
import { UserService } from "./user.service";
import { ResponseSender } from "../../../helper/ResponseSender";
import httpStatus from "http-status";

const getAllUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.fetchUsers();
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Users featched successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// For single get
const singleGet: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserService.fetchSingle(id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User featched successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// For updating
const updateSingle: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserService.update(req.body, id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User updated successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// For deleting single user
const deleteSingle: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserService.deleteUser(id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User deleted successfylly",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const UserController = {
  getAllUser,
  singleGet,
  updateSingle,
  deleteSingle,
};
