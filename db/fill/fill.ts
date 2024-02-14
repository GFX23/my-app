/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint radix: "off" */

import data from "@/data/data.json";
import { insertRunners } from "@/db/insert";
import { RunnerTypesEnum } from "@/db/types";

export type RunnerData = {
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

export const transformData = (item: any) => {
	const matWeight = Math.ceil(item.Da * item.Ba * 0.001 * 7.85) || 0;
	return {
		name: item.name,
		order: item.order,
		type: RunnerTypesEnum[item.type as keyof typeof RunnerTypesEnum],
		customer: item.customer,
		Da: parseInt(item.Da) || 0,
		Ba: parseInt(item.Ba) || 0,
		Z: parseInt(item.Z) || 0,
		edmPrice: item.EDM || 0,
		priceTotal: item.CNCNetto || 0,
		hourRate: Math.ceil(item.hourRateReal) || 0,
		hoursRealy: item.timeEstimate || 0,
		matIncluded: false,
		matSpec: "X3CrNiMo13-4",
		matWeight,
		millingPrice: item.millingPrice || 0,
		matPricePerKg: 5.5,
		materialPrice: Math.ceil(matWeight * 5.5),
		machiningHours: item.timeEstimate || 0,
		lathePrice: item.lathePrice || 0,
		grindingPrice: item.grindingPrice || 0,
		balancingPrice: item.balancingPrice || 0,
		testsPrice: item.testsPrice || 0,
	};
};

export const peltons: RunnerData[] = data
	.filter((item) => item.type === "Peltonka" && !item.name.includes("Pelton runner Caribou"))
	.map(transformData);
export const francis: RunnerData[] = data
	.filter((item) => item.type === "Franciska")
	.map(transformData);
export const impellers: RunnerData[] = data
	.filter((item) => item.type === "Impeller")
	.map(transformData);
export const turgos: RunnerData[] = data.filter((item) => item.type === "Turgo").map(transformData);

function chunkArray(array: any[], chunkSize: number): RunnerData[][] {
	let index = 0;
	const arrayLength = array.length;
	const tempArray: RunnerData[][] = [];

	for (index = 0; index < arrayLength; index += chunkSize) {
		const chunk = array.slice(index, index + chunkSize);
		tempArray.push(chunk);
	}

	return tempArray;
}

const peltonChunks = chunkArray(peltons, 100);
const francisChunks = chunkArray(francis, 100);

export const fillDB = async () => {
	let peltonCount = 0;
	let francisCount = 0;

	const turgoInsertion = await insertRunners(turgos);
	console.log("🟢 Turgos inserted: ", turgoInsertion.count);
	for (let i = 0; i < peltonChunks.length; i++) {
		const peltonInsertion = await insertRunners(peltonChunks[i]);
		peltonCount += peltonInsertion.count;
		console.log(`🟢 Peltons inserted for chunk ${i + 1}: `, peltonInsertion.count);
	}
	for (let i = 0; i < francisChunks.length; i++) {
		const francisInsertion = await insertRunners(francisChunks[i]);
		francisCount += francisInsertion.count;
		console.log(`🟢 Francises inserted for chunk ${i + 1}: `, francisInsertion.count);
	}
	const impellerInsertion = await insertRunners(impellers);
	console.log("🟢 Impellers inserted: ", impellerInsertion.count);
	return `🟢 All runners inserted! ${peltonCount} peltons, ${francisCount} francis, ${impellerInsertion.count} impellers and ${turgoInsertion.count} turgos  🟢`;
};
