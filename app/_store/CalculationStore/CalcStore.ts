import { Runner } from "@prisma/client";
import { create } from "zustand";

import { CalcStore, Calculation, RunnerCalcParams } from "@/app/_store/CalculationStore/types";

// TODO - Figure out how to infer the type of the store

export const useCalcStore = create<CalcStore>()((set) => ({
	runners: [],
	runnerCalcParams: {
		type: "pelton",
		Da: 0,
		Ba: 0,
		Z: 0,
		hourRate: 85,
		roughness: "3.2",
		allowance: 6,
		matPricePerKg: 6,
		matDensity: 7850,
		DaOffset: 150,
		BaOffset: 50,
	},
	calculation: {
		machiningHours: 0,
		millingPrice: 0,
		testsPrice: 0,
		balancingPrice: 0,
		edmPrice: 0,
		grindingPrice: 0,
		lathePrice: 0,
		matWeight: 0,
		matPrice: 0,
		priceTotal: 0,
	},
	setRunners: (runners: Runner[]) => set({ runners }),
	setRunnerCalcParams: (runnerCalcParams: RunnerCalcParams) => set({ runnerCalcParams }),
	setCalculation: (calculation: Calculation) => set({ calculation }),
}));
