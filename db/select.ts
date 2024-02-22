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

type DataProps = {
	type: string;
	Da: string;
	Ba: string;
	daOffset: string;
	baOffset: string;
};

export const getRunnersForPricing = async (data: DataProps) => {

	const daMin = parseInt(data.Da, 10) - parseInt(data.daOffset, 10);
	const daMax = parseInt(data.Da, 10) + parseInt(data.daOffset, 10);
	const baMin = parseInt(data.Ba, 10) - parseInt(data.baOffset, 10);
	const baMax = parseInt(data.Ba, 10) + parseInt(data.baOffset, 10);

	const runners = await prisma.runner.findMany({
		where: {
			type: data.type,
			Da: {
				gte: daMin,
				lte: daMax,
			},
			Ba: {
				gte: baMin,
				lte: baMax,
			},
		},
	});
	return runners;
};
