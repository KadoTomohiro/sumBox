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
  boxInputForm: FormGroup
  selectedExcludes: number[] = []
  results: Observable<SumBox[]>
  excludeOptions = [...Array(9)].map((_, i) => i + 1)
  constructor(private fb: FormBuilder, private sumBoxService: SumBoxService) {
    this.boxInputForm = new FormGroup({
      total:new FormControl(1,  {nonNullable: true, validators: [Validators.required, Validators.min(1), Validators.max(45)]}),
      boxCount: new FormControl(1, {nonNullable: true, validators:[Validators.required, Validators.min(1), Validators.max(9)]}),
      excludes: this.fb.array(this.excludeOptions.map(o => new FormControl(false, {nonNullable: true})))
    })

    this.results = this.boxInputForm.valueChanges.pipe(
      map((value: SumBoxInput) => {
        const {total, boxCount, excludes} = value
        const excludeNumbers = excludes.map((checked, index) => checked ? index + 1 : 0).filter(num => num !== 0)
        const input = {
          total, boxCount,
          excludes: excludeNumbers
        }
        return this.sumBoxService.find(input)
      })
    )

  }

  resetExcludes() {
    this.boxInputForm.controls['excludes'].reset()
  }

}
