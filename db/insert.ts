"use server";

import { User } from "@prisma/client";
import { hash, genSaltSync } from "bcrypt-ts";

import { prisma } from "../prisma/prisma";

export const insertUser = async ({
	firstName,
	lastName,
	email,
	password,
	avatar,
	role,
}: Omit<User, "createdAt" | "updatedAt" | "deleted">) => {
	const salt = genSaltSync(10);
	const newUser = await prisma.user.create({
		data: {
			firstName,
			lastName,
			email,
			password: await hash(password, salt),
			avatar,
			role,
		},
	});
	return newUser;
};

type RunnerData = {
	name: string;
	order: string;
	type: string;
	customer: string;
	Da: number;
	Ba: number;
	Z: number;
	edmPrice: number;
	priceTotal: number;
	hourRate: number;
	hoursRealy: number;
	matIncluded: boolean;
	matSpec: string;
	matWeight: number;
	millingPrice: number;
	matPricePerKg: number;
	materialPrice: number;
	machiningHours: number;
	lathePrice: number;
	grindingPrice: number;
	balancingPrice: number;
	testsPrice: number;
};

export const insertRunners = async (data: RunnerData[]) => {
	const newRunner = await prisma.runner.createMany({
		data: [...data],
	});
	return newRunner;
};
