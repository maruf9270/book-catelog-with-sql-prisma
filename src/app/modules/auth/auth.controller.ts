import { RequestHandler } from "express";
import { AuthService } from "./auth.service";
import { ResponseSender } from "../../../helper/ResponseSender";
import httpStatus from "http-status";
import config from "../../../config";

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const result = await AuthService.postUser(req.body);
    ResponseSender.responseSender(res, {
      message: "User created successfully",
      success: true,
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken, accessToken } = await AuthService.login(req.body);

    const cookieOptions = {
      secure: config.env === "production",
      httpOnly: true,
    };
    res.cookie("user", accessToken, cookieOptions);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User loggedin successfully !",
      token: refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export const AuthController = { createUser, loginUser };
