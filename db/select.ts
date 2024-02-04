"use server";

import { prisma } from "./prisma";

export const getUser = async (email: string) =>
	prisma.user.findUnique({
		where: {
			email,
		},
	});
