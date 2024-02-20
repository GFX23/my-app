import { Runner } from "@prisma/client";

type CalculationObject = {
  machiningHours: string[];
  millingPrice: string[];
  testsPrice: string[];
  balancingPrice: string[];
  edmPrice?: string[];
  lathePrice?: string[];
};

export const calculate = (runners: Runner[]) => {
  const result = runners.reduce((acc: CalculationObject, runner) => {
    const { type, machiningHours, millingPrice, edmPrice, testsPrice, balancingPrice, lathePrice } =
      runner;

    if (type !== "pelton") {
      if (edmPrice) acc.edmPrice = [...(acc.edmPrice || []), edmPrice.toString()];
      if (lathePrice) acc.lathePrice = [...(acc.lathePrice || []), lathePrice.toString()];
    }

    if (machiningHours) acc.machiningHours = [...(acc.machiningHours || []), machiningHours.toString()];
    if (millingPrice) acc.millingPrice = [...(acc.millingPrice || []), millingPrice.toString()];
    if (testsPrice) acc.testsPrice = [...(acc.testsPrice || []), testsPrice.toString()];
    if (balancingPrice) acc.balancingPrice = [...(acc.balancingPrice || []), balancingPrice.toString()];

    return acc;
  }, {} as CalculationObject);

  const averages = Object.entries(result).reduce((acc: { [key in keyof CalculationObject]: number }, [key, values]) => {
    const sum = values.reduce((a, b) => a + Number(b), 0);
    const avg = Math.ceil(sum / values.length);
    acc[key as keyof CalculationObject] = avg;
    return acc;
  }, {} as { [key in keyof CalculationObject]: number });

  return averages;
};
