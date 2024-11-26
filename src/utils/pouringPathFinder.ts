import { Jug, JugState } from "../entity/jug.entity";
import { gcd } from "./gcd";

export type resultType = JugState[][];
export type PouringFinderType = [resultType | string, Jug?, Jug?];
export const findOptimalPath = (
  x: number,
  y: number,
  z: number,
  asArray?: boolean
): PouringFinderType | number[][] => {
  const a = pouringPathFinder(x, y, z);
  const b = pouringPathFinder(y, x, z);
  if (Array.isArray(b[0])) b[0].map((el) => el.reverse());
  if (asArray && Array.isArray(a[0]) && Array.isArray(b[0])) {
    if (a[0].length < b[0].length) {
      return a[0].map((Jug) => [Jug[0].current, Jug[1].current]);
    }
    if (b[0].length < a[0].length) {
      return b[0].map((Jug) => [Jug[0].current, Jug[1].current]);
    }
  }
  return a[0].length < b[0].length ? a : b;
};
export function checkIfPossible(x: number, y: number, z: number) {
  if (x < z && y < z) return false;
  const isPossible = z / gcd(x, y);
  if (!Number.isInteger(isPossible)) return false;
  return true;
}
export function checkIfValid(x: number, y: number, z: number) {
  if (!Number.isInteger(x) || !Number.isInteger(y))
    return ["Both entry jugs must be an integer"];
  if (x <= 0 || y <= 0) return ["Values must be greater than 0"];
  if (x < z && y < z) {
    return ["Values must be greater or equal to desired amount"];
  }

  return true;
}
export function pouringPathFinder(
  x: number,
  y: number,
  z: number
): PouringFinderType {
  const JugX = new Jug(x);
  const JugY = new Jug(y);
  const isValid = checkIfValid(x, y, z);
  if (Array.isArray(isValid)) return [isValid[0]];
  if (!checkIfPossible(x, y, z)) return ["Not possible"];

  const acc1: resultType = [];
  const chekcIfBreak = () =>
    JugX.getCurrent() === z || JugY.getCurrent() === z;

  while (JugX && JugY) {
    if (JugY.isEmpty()) {
      JugY.fill();
      acc1.push([JugX.getCurrentState(), JugY.getCurrentState()]);
      if (chekcIfBreak()) break;
    }
    if (JugX.isFull()) {
      JugX.emptyJug();
      acc1.push([JugX.getCurrentState(), JugY.getCurrentState()]);
      if (chekcIfBreak()) break;
    }
    if (chekcIfBreak()) break;
    JugY.transferTo(JugX);
    acc1.push([JugX.getCurrentState(), JugY.getCurrentState()]);
    if (chekcIfBreak()) break;
  }
  return [acc1, JugX, JugY];
}
