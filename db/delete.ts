"use server";

import { prisma } from "./prisma";

export const deleteUser = async (email: string) => {
	const deletedUser = await prisma.user.delete({
		where: {
			email,
		},
	});
	return deletedUser;
};
