import { prisma } from "../../shared/prisma";
import { User } from "@prisma/client";

// For getting all the user
const fetchUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      name: true,
      role: true,
      id: true,
      email: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return users;
};

// For getting single user
const fetchSingle = async (payload: string) => {
  const result = await prisma.user.findFirst({
    where: {
      id: payload,
    },
    select: {
      name: true,
      role: true,
      id: true,
      email: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });
  return result;
};

// For updating single user
const update = async (payload: Partial<User>, id: string) => {
  const result = await prisma.user.update({
    where: {
      id: id,
    },
    data: payload,
  });
  const { password, ...withoutPass } = result;
  return withoutPass;
};

// For deleting a single
const deleteUser = async (payload: string) => {
  const result = await prisma.user.delete({
    where: {
      id: payload,
    },
  });
  const { password, ...withoutPass } = result;
  return withoutPass;
};

export const UserService = { fetchUsers, fetchSingle, update, deleteUser };
