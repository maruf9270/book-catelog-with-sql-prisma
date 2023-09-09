import httpStatus from "http-status";
import ApiError from "../../middlewares/ApiError";
import { prisma } from "../../shared/prisma";
import bcyrpt from "bcrypt";
import { User } from "@prisma/client";
import config from "../../../config";
import { IGenericLogin } from "./auth.interface";
import { jwtHelpers } from "../../../helper/jwtHelper";
import { Secret } from "jsonwebtoken";

const postUser = async (user: User) => {
  const isExists = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });
  if (isExists) {
    throw new ApiError(httpStatus.CONFLICT, "Email Already exists");
  }
  const hashedPassword = await bcyrpt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );
  const result = await prisma.user.create({
    data: {
      ...user,
      password: hashedPassword,
    },
  });
  const { password, ...dataWithoutPass } = result;
  return dataWithoutPass;
};

// FOr logging in
const login = async (payload: IGenericLogin) => {
  const doesExists = await prisma.user.findFirst({
    where: {
      email: payload.email,
    },
    select: {
      email: true,
      id: true,
      password: true,
      role: true,
    },
  });
  if (!doesExists) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Email is incorrect");
  }

  const doesPasswordMatch = await bcyrpt.compare(
    payload.password,
    doesExists.password
  );
  if (!doesPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Incorrect password");
  }
  const accessToken = jwtHelpers.createToken(
    { role: doesExists.role, id: doesExists.id },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  const refreshToken = jwtHelpers.createToken(
    { id: doesExists.id, role: doesExists.role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = { postUser, login };
