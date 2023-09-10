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
    }
  } catch (error) {
    next(error);
  }
};

export const OrderController = { createOrder, getallorder };
