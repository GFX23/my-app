import { Runner } from "@prisma/client";

import { RunnerCalcParams } from "@/app/_store/CalculationStore/types";

type CalculationObject = {
  machiningHours: number[];
  millingPrice: number[];
  testsPrice: number[];
  balancingPrice: number[];
  grindingPrice: number[];
  edmPrice: number[];
  lathePrice: number[];
};

export const calcPrices = (runners: Runner[]) => {
  const result = runners.reduce((acc: CalculationObject, runner) => {
    const { type, machiningHours, millingPrice, edmPrice, testsPrice, balancingPrice, lathePrice, grindingPrice  } =
      runner;

    if (type !== "pelton") {
      if (edmPrice) acc.edmPrice = [...(acc.edmPrice || []), edmPrice];
      if (lathePrice) acc.lathePrice = [...(acc.lathePrice || []), lathePrice];
    }

    if (machiningHours) acc.machiningHours = [...(acc.machiningHours || []), machiningHours];
    if (millingPrice) acc.millingPrice = [...(acc.millingPrice || []), millingPrice];
    if (testsPrice) acc.testsPrice = [...(acc.testsPrice || []), testsPrice];
    if (balancingPrice) acc.balancingPrice = [...(acc.balancingPrice || []), balancingPrice];
    if (grindingPrice) acc.grindingPrice = [...(acc.grindingPrice || []), grindingPrice];

    return acc;
  }, {
    edmPrice: [],
    lathePrice: [],
    grindingPrice: [],
    machiningHours: [],
    millingPrice: [],
    testsPrice: [],
    balancingPrice: [],
  });

  const averages = Object.entries(result).reduce((acc: { [key in keyof CalculationObject]: number }, [key, values]) => {
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = Math.ceil(sum / values.length);
    acc[key as keyof CalculationObject] = avg || 0;
    return acc;
  }, {} as { [key in keyof CalculationObject]: number });

  return averages;
};

export const calcParams = (data: RunnerCalcParams) => {
 const { Da, Ba, allowance, matDensity } = data;

 const matWeight = Math.ceil((Math.PI * (((Da + allowance) / 2) ** 2) * (Ba + allowance) * (matDensity / 1000000000)) );
 const matPrice = Math.ceil(matWeight * data.matPricePerKg);

 return { matWeight, matPrice };
};
