import {SumBoxInput} from "./sum-box-input";

export class SumBox {

  readonly numberParts: number[]
  readonly total: number
  readonly boxCount: number
  constructor(initialIndex: number) {
    this.numberParts = this.generateParts(initialIndex);
    this.total = this.sum()
    this.boxCount = this.numberParts.length
  }

  valid(input: SumBoxInput): boolean {
    const {total, boxCount, excludes} = input

    const validTotal = this.total === total
    const validBoxCount = this.boxCount === boxCount
    const validExcludes = excludes.every(exclude => !this.numberParts.includes(exclude))


    return validTotal && validBoxCount && validExcludes
  }

  private sum() {
    return this.numberParts.reduce((acc, curr) => acc + curr, 0);
  }

  private generateParts(initialIndex: number) {
    const bits = initialIndex.toString(2)
      .padStart(9, '0')
      .split('')
    return bits
      .map((bit, index) => bit === '1' ? index + 1 : 0)
      .filter(num => num !== 0)
  }

  toString() {
    return JSON.stringify(this)
  }

}
