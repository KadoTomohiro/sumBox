import { Injectable } from '@angular/core';
import {SumBox} from "./sum-box";
import {SumBoxSet} from "./sum-box-set";
import {SumBoxInput} from "./sum-box-input";

@Injectable({
  providedIn: 'root'
})
export class SumBoxService {
  readonly sumBoxsSet: SumBoxSet
  constructor() {
    this.sumBoxsSet = new SumBoxSet()
  }

  find(input: SumBoxInput) {
    return this.sumBoxsSet.find(input)
  }
}
