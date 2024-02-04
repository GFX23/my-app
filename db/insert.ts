"use server";

import { User } from "@prisma/client";
import { hash, genSaltSync } from "bcrypt-ts";

import { prisma } from "./prisma";

export const insertUser = async ({ firstName, lastName, email, password, avatar, role }: Omit<User, "createdAt" | "updatedAt" | "deleted"> ) => {
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
