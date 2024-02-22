"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { Input } from "../Input";
import { Select } from "../Select";
import { Button } from "@/app/_components/Button";
import { Slider } from "@/app/_components/Slider/Slider";
import { Card } from "@/app/_containers/Card";
import { RunnerCalcParams, useCalcStore } from "@/app/_store/CalcStore";
import { THRESHOLD } from "@/config/settings";
import { getRunnersForPricing } from "@/db/select";


// TODO - Figure out how to pass defaultValue to Slider and Select

export const CalcSideBar = () => {
	const defParams = useCalcStore((state) => state.runnerCalcParams);
	const setRunners = useCalcStore((state) => state.setRunners);
	const [loading, setLoading] = useState(false);
	
	const { register, handleSubmit } = useForm<RunnerCalcParams>(
		{ defaultValues: { 
			type: defParams.type,
			Da: defParams.Da,
			Ba: defParams.Ba,
			Z: defParams.Z,
			hourRate: defParams.hourRate,
			roughness: defParams.roughness,
			allowance: defParams.allowance,
			matPricePerKg: defParams.matPricePerKg,
			DaOffset: defParams.DaOffset,
			BaOffset: defParams.BaOffset,
		 } });

	const onSubmit: SubmitHandler<RunnerCalcParams> = async (data) => {
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
		<Card label="SEARCH PARAMETERS" className="w-96">
			<form onSubmit={handleSubmit(onSubmit)}>
				<Select
					label="Runner Type"
					register={register}
					defaultValue={defParams.type}
					name="type"
					options={[
						{ value: "pelton", label: "Pelton Runner" },
						{ value: "francis", label: "Francis Runner" },
						{ value: "split", label: "Francis - Split" },
						{ value: "turgo", label: "Turgo" },
					]}
				/>
				<Input register={register} type="number" name="Da" label="Da"/>
				<Input register={register} type="number" name="Ba" label="Ba"/>
				<Input register={register} type="number" name="Z" label="Z"/>
				<Input register={register} type="number" name="hourRate" label="Hour rate"/>
				<Select
					label="Demanded Roughness"
					register={register}
					name="roughness"
					defaultValue={defParams.roughness}
					options={[
						{ value: "0.8", label: "Ra 0.8" },
						{ value: "1.6", label: "Ra 1.6" },
						{ value: "3.2", label: "Ra 3.2" },
					]}
				/>
				<Input register={register} type="number" name="allowance" label="Allowance" />
				<Input register={register} type="number" name="matPricePerKg" label="Material - price per KG" />
				<Slider min={0} max={250} register={register} name="DaOffset" defaultValue={defParams.DaOffset} label="Da Offset" />
				<Slider min={0} max={125} register={register} name="BaOffset" defaultValue={defParams.BaOffset} label="Ba Offset" />
				<Button type="submit" loading={loading}>Search for Runners</Button>
			</form>
		</Card>
	);
};