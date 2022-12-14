import {SumBox} from "./sum-box";
import {SumBoxInput} from "./sum-box-input";

export class SumBoxSet {
  readonly sumBoxs: SumBox[] = []
  constructor() {
    for(let initialIndex = 1; initialIndex < 0b1000000000; initialIndex++) {
      const sumBox = new SumBox(initialIndex)
      this.sumBoxs.push(sumBox)

    }
  }

  find(input: SumBoxInput): SumBox[] {
    const {total, boxCount} = input
    return this.sumBoxs.filter(sumBox => sumBox.valid(input))
  }
}
