import { Runner } from "@prisma/client";

export type RunnerTypes = "pelton" | "francis" | "split" | "turgo" | "impeller";
export type RunnerNames =
	| "Pelton Runner"
	| "Francis Runner"
	| "Split Francis Runner"
	| "Turgo"
	| "Impeller";
export type Roughness = "3.2" | "1.6" | "0.8" | "0.4";

export enum RunnerTypesEnum {
	Peltonka = "pelton",
	Franciska = "francis",
	Turgo = "turgo",
	Impeller = "impeller",
}

export enum RunnerNamesEnum {
	pelton = "Pelton Runner",
	francis = "Francis Runner",
	split = "Split Francis Runner",
	turgo = "Turgo",
	impeller = "Impeller",
}

export enum MaterialTypesEnum {
	X3CrNiMo = "X3CrNiMo",
	X4CrNiMo = "X4CrNiMo",
	Duplex = "Duplex",
	SuperDuplex = "SuperDuplex",
}

export type CalcStore = {
	runners: Runner[];
	runnerCalcParams: RunnerCalcParams;
	calculation: Calculation;
	setRunners: (runners: Runner[]) => void;
	setRunnerCalcParams: (runnerCalcParams: RunnerCalcParams) => void;
	setCalculation: (calculation: Calculation) => void;
};



export const RUNNER_TYPES_OPTIONS = Object.entries(RunnerNamesEnum).map(([key, value]: [string, string]) => ({
	label: value,
	value: key,
}));

export const MATERIAL_OPTIONS = Object.entries(MaterialTypesEnum).map(([key, value]: [string, string]) => ({
	label: value,
	value: key,
}));

export type RunnerCalcParams = {
	type: RunnerTypes;
	Da: number;
	Ba: number;
	Z: number;
	hourRate: number;
	roughness: Roughness;
	allowance: number;
	matPricePerKg: number;
	matDensity: number;
	DaOffset: number;
	BaOffset: number;
};

export type Calculation = {
	machiningHours: number;
	millingPrice: number;
	testsPrice: number;
	balancingPrice: number;
	edmPrice: number;
	grindingPrice: number;
	lathePrice: number;
	matWeight: number;
	matPrice: number;
	priceTotal: number;
};
