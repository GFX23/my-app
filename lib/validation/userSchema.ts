import z from "zod";

export const PASWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_LENGTH = 50;
export const MAXIMUM_EMAIL_LENGTH = 128;

export const emailSchema = z
	.string()
	.min(1, { message: "Email is required!" })
	.email({ message: "Enter email with valid format!" })
	.max(MAXIMUM_EMAIL_LENGTH, { message: `Maximum email length is ${MAXIMUM_EMAIL_LENGTH}.` });

export const passwordSchema = z
	.string()
	.min(PASSWORD_MIN_LENGTH, {
		message: `Minimum password length is ${PASSWORD_MIN_LENGTH}.`,
	})
	.max(PASSWORD_LENGTH, { message: `Maximum password length is ${PASSWORD_LENGTH}.` });

export const LoginSchema = () =>
	z.object({
		password: passwordSchema,
		email: emailSchema,
	});
