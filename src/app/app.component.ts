import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SumBox} from "./sum-box";
import {map, Observable} from "rxjs";
import {SumBoxService} from "./sum-box.service";
import {SumBoxInput} from "./sum-box-input";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tenkey = new FormControl([1, 2, 3])
  boxInputForm: FormGroup
  selectedExcludes: number[] = []
  results: Observable<SumBox[]>

  resultDisabled: boolean[] = []
  excludeOptions = [...Array(9)].map((_, i) => i + 1)
  constructor(private fb: FormBuilder, private sumBoxService: SumBoxService) {
    this.boxInputForm = new FormGroup({
      total:this.fb.control(10,  {nonNullable: true, validators: [Validators.required, Validators.min(1), Validators.max(45)]}),
      boxCount: this.fb.control(2, {nonNullable: true, validators:[Validators.required, Validators.min(1), Validators.max(9)]}),
      includes: this.fb.control([], {nonNullable: true}),
      excludes: this.fb.control([], {nonNullable: true}),
    })

    this.results = this.boxInputForm.valueChanges.pipe(
      map((value: SumBoxInput) => {
        const {total, boxCount, includes, excludes} = value
        const input = {
          total, boxCount,
          includes,
          excludes,
        }
        return this.sumBoxService.find(input)
      })
    )

    this.results.subscribe((result) => {
      this.resultDisabled = result.map(() => false)
    })

  }

  resetIncludes() {
    this.boxInputForm.controls['includes'].reset()
  }
  resetExcludes() {
    this.boxInputForm.controls['excludes'].reset()
  }

  toggleDisable(index: number) {
    const temp = Array.from(this.resultDisabled)
    temp[index] = !temp[index]
    this.resultDisabled = temp
  }
}
