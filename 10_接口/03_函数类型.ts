type CalcFn = (n1: number, n2: number) => number;

function calc(n1: number, n2: number, calcFn: CalcFn) {
  return calcFn(n1, n2);
}

const add: CalcFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface ICalc {
  (n1: number, n2: number): number;
}

const multi: ICalc = (n1: number, n2: number) => {
  return n1 * n2;
};
