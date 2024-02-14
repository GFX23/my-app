"use server";

import { prisma } from "../prisma/prisma";

export const deleteUser = async (email: string) => {
	const deletedUser = await prisma.user.delete({
		where: {
			email,
		},
	});
	return deletedUser;
};

export const deleteRunner = async (id: string) => {
	try {
		const deletedRunner = await prisma.runner.delete({
			where: {
				id,
			},
		});
		return deletedRunner;
	} catch (error) {
		console.error(error);
		return error;
	}
};
