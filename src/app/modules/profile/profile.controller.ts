import { RequestHandler } from "express";
import { ProfileService } from "./profile.service";
import { ResponseSender } from "../../../helper/ResponseSender";
import httpStatus from "http-status";

// For getting single profile
const getSIngle: RequestHandler = async (req, res, next) => {
  try {
    const id = req.user?.id;
    const result = await ProfileService.fetchSingle(id);
    ResponseSender.responseSender(res, {
      success: true,
      message: "Profile featched successfully",
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProfileController = { getSIngle };
