"use server";

import { prisma } from "../prisma/prisma";
import { RunnerCalcParams } from "@/app/_store/CalculationStore/types";

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

export const getRunnersForPricing = async (data: RunnerCalcParams) => {
	const daMin = data.Da - data.DaOffset;
	const daMax = data.Da + data.DaOffset;
	const baMin = data.Ba - data.BaOffset;
	const baMax = data.Ba + data.BaOffset;

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
