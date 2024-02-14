"use server";

import { prisma } from "../prisma/prisma";

export const getUser = async (email: string) =>
	prisma.user.findUnique({
		where: {
			email,
		},
	});

export const getAllRunners = async () => {
	const runners = await prisma.runner.findMany({
		where: {
			type: "pelton",
		},
	});
	return runners;
};
