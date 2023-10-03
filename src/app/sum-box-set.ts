import {SumBox} from "./sum-box";
import {SumBoxInput} from "./sum-box-input";

export class SumBoxSet {
  readonly sumBoxs: SumBox[] = []
  constructor() {
    for(let initialIndex = 1; initialIndex < 0b1000000000; initialIndex++) {
      const bitStr = initialIndex.toString(2).padStart(9, '0')
      const reversed = bitStr.split('').reverse().join('')
      const sumBox = new SumBox(initialIndex)
      this.sumBoxs.push(sumBox)
      this.sumBoxs.sort()
    }
  }

  find(input: SumBoxInput): SumBox[] {
    const {total, boxCount} = input
    return this.sumBoxs.filter(sumBox => sumBox.valid(input))
  }

  totalSet(): number[] {
    const totals = this.sumBoxs.map(sumBox => sumBox.total)
    const set = new Set<number>(totals)
    return Array.from(set).sort((acc, cul) => Number(acc) - Number(cul))
  }

  boxCountSet(): number[] {
    const boxCounts = this.sumBoxs.map(sumBox => sumBox.boxCount)
    const set = new Set<number>(boxCounts)
    return Array.from(set).sort()
  }
}
