import { Runner } from "@prisma/client";
import { create } from "zustand";



type CalcStore = {
  runners: Runner[];
  setRunners: (runners: Runner[]) => void;
};

export const useCalcStore = create<CalcStore>((set) => ({
  runners: [],
  setRunners: (runners) => set({ runners }),
}));