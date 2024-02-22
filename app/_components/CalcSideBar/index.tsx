"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "@/app/_components/Button";
import { Slider } from "@/app/_components/Slider/Slider";
import { useCalcStore } from "@/app/_store/CalcStore";
import { THRESHOLD } from "@/config/settings";
import { getRunnersForPricing } from "@/db/select";



type FormProps = {
	type: string;
	Da: string;
	Ba: string;
	Z: string;
	hourRate: string;
	roughness: string;
	allowance: string;
	matPricePerKg: string;
	daOffset: string;
	baOffset: string;
};

export const CalcSideBar = () => {
	const [loading, setLoading] = useState(false);
	const setRunners = useCalcStore((state) => state.setRunners);
	const { register, handleSubmit } = useForm<FormProps>(
		{ defaultValues: { type: "pelton", allowance: "6", matPricePerKg: "6" } });

	const onSubmit: SubmitHandler<FormProps> = async (data) => {
		setLoading(true);
		try {
			const runnersR = await getRunnersForPricing(data);
			if (runnersR.length === 0) {
				toast.error("No runners found");
			}
			if (runnersR.length > 0) {
				toast.success(`Found ${runnersR.length} runners.`);
			}
			console.debug("form on sideBar", runnersR);
			setRunners(runnersR);
		} catch (e) {
			toast.error("Error while fetching runners");
			console.error(e);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, THRESHOLD);
		}

	};

	return (
		<div className="w-96 h-full container flex-col items-center">
			<h1>CalcSideBar</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="p-4">
				<Select
					label="Druh Turbíny"
					register={register}
					defaultValue="pelton"
					name="type"
					options={[
						{ value: "pelton", label: "Pelton Runner" },
						{ value: "francis", label: "Francis Runner" },
						{ value: "split", label: "Francis - Split" },
						{ value: "turgo", label: "Turgo" },
					]}
				/>
				<Input register={register} name="Da" label="Da"/>
				<Input register={register} name="Ba" label="Ba" />
				<Input register={register} name="Z" label="Z" />
				<Input register={register} name="hourRate" label="Hour rate" defaultValue={85} />
				<Select
					label="Demanded Roughness"
					register={register}
					name="roughness"
					defaultValue="3.2"
					options={[
						{ value: "0.8", label: "Ra 0.8" },
						{ value: "1.6", label: "Ra 1.6" },
						{ value: "3.2", label: "Ra 3.2" },
					]}
				/>
				<Input register={register} name="allowance" label="Allowance" />
				<Input register={register} name="matPricePerKg" label="Material - price per KG" />
				<Slider min={0} max={250} register={register} name="daOffset" defaultValue={150} label="Da Offset" />
				<Slider min={0} max={125} register={register} name="baOffset" defaultValue={50} label="Ba Offset" />
				<Button type="submit" loading={loading}>Search for Runners</Button>
			</form>
		</div>
	);
};

