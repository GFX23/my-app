import { Runner } from "@prisma/client";
import { create } from "zustand";

import { Roughness, RunnerTypes } from "@/db/types";

export type RunnerCalcParams = {
  type: RunnerTypes;
  name: string;
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



type CalcStore = {
  runners: Runner[];
  runnerCalcParams: RunnerCalcParams;
  setRunners: (runners: Runner[]) => void;
};

export const useCalcStore = create<CalcStore>((set) => ({
  runners: [],
  runnerCalcParams: {
    type: "pelton",
    name: "",
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
  setRunners: (runners: Runner[]) => set({ runners }),
  setRunnerCalcParams: (runnerCalcParams: RunnerCalcParams) => set({ runnerCalcParams }),
}));