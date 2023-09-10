import { RequestHandler } from "express";
import { OrderService } from "./order.service";
import { ResponseSender } from "../../../helper/ResponseSender";
import httpStatus from "http-status";

// For creating order
const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const bookdata = req.body;
    const user = req.user;
    const result = await OrderService.postOrder(bookdata, user?.id);
    ResponseSender.responseSender(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// For getting order
const getallorder: RequestHandler = async (req, res, next) => {
  try {
    const user = req.user;
    if (user?.role == "admin") {
      const result = await OrderService.getALlOrders();
      ResponseSender.responseSender(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Orders retived successfully",
        data: result,
      });
      if (user?.role == "customer") {
        const result = await OrderService.getsingleById(user.id);
        ResponseSender.responseSender(res, {
          success: true,
          statusCode: httpStatus.OK,
          message: "Order retived successfully",
          data: result,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

// For gettingsingle order
const getSingleOrder: RequestHandler = async (req, res, next) => {
  try {
    const id = req?.params.id;
    if (req?.user?.role == "admin") {
      const result = await OrderService.getSpecificOrderAdmin(id);
      ResponseSender.responseSender(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Order fetched successfully",
        data: result,
      });
    }
    if (req?.user?.role == "customer") {
      const result = await OrderService.getSpecificOrdercustomer(
        id,
        req.user?.id
      );
      ResponseSender.responseSender(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Order data fetched successfully",
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const OrderController = { createOrder, getallorder, getSingleOrder };
