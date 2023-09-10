import { prisma } from "../../shared/prisma";

// For getting single profile
const fetchSingle = async (params: string) => {
  const result = await prisma.user.findFirst({
    where: {
      id: params,
    },
  });

  return result;
};

export const ProfileService = { fetchSingle };
