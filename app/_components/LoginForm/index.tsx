"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Button } from "@/app/_components/Button";
import { Input } from "@/app/_components/Input";
import { THRESHOLD } from "@/config/settings";
import { authenticate } from "@/lib/actions";
import { LoginSchema } from "@/lib/validation/userSchema";

type LoginFormT = {
	email: string;
	password: string;
};

export const LoginForm = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginFormT>({
		defaultValues: { email: "", password: "" },
		resolver: zodResolver(LoginSchema()),
		mode: "onChange",
	});

	const onSubmit = async (data: LoginFormT) => {
		toast.info("Logging in...");
		setLoading(true);
		try {
			const response = await authenticate(data);
			if (response !== "Success!") {
				throw new Error("Error logging in");
			}
			toast.success("Logged In");
			reset();
		} catch (error) {
			console.error(error);
			toast.error("Error logging in");
		} finally {
			setTimeout(() => {
				setLoading(false);
				router.refresh();
			}, THRESHOLD);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center rounded-lg px-6 pb-4 pt-8">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-4 w-96">
				<Input
					type="email"
					error={errors.email?.message}
					label="Email"
					register={register}
					name="email"
				/>
				<Input
					error={errors.password?.message}
					label="Password"
					type="password"
					register={register}
					name="password"
				/>
				<Button type="submit" label="Log In" loading={loading} />
			</form>
		</div>
	);
};
