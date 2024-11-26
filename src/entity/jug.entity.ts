type JugStates = "EMPTY" | "FULL" | "PARTIAL-FULL" | "";
import { v4 as uuidv4 } from "uuid";
export type JugState = {
  maxCapacity: number;
  current: number;
  state: string;
  key: string;
};
export class Jug {
  maxCapacity: number;
  current: number = 0;
  state: JugStates = "EMPTY";
  constructor(maxCapacity: number) {
    this.maxCapacity = maxCapacity;
  }
  getCurrentState(): JugState {
    return {
      maxCapacity: this.maxCapacity,
      current: this.current,
      state: this.state,
      key: uuidv4(),
    };
  }
  fill() {
    this.setState("FULL");
    this.current = this.maxCapacity;
  }
  getState() {
    return this.state;
  }
  setState(val: JugStates) {
    this.state = val;
  }
  transferTo(incomingJug: Jug) {
    if (incomingJug.isFull()) {
      throw new Error("Provided Jug is already filled");
    }
    const inDiff = incomingJug.maxCapacity - incomingJug.current;
    if (this.current === 0) return;
    if (this.current <= inDiff) {
      incomingJug.setAmount(incomingJug.current + this.current);
      incomingJug.setState("PARTIAL-FULL");
      this.emptyJug();
      return this.setState("EMPTY");
    }
    this.setAmount(this.current - inDiff);
    this.setState("PARTIAL-FULL");

    incomingJug.fill();
    return incomingJug.setState("FULL");
  }
  public isFull() {
    return this.current === this.maxCapacity;
  }
  public isEmpty() {
    return this.current === 0;
  }
  private setAmount(val: number) {
    this.current = val;
  }
  public emptyJug() {
    this.setState("EMPTY");
    this.current = 0;
  }
  getCurrent(): number {
    return this.current;
  }
}
