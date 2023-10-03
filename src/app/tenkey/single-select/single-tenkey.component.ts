import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {range, toArray} from "rxjs";

@Component({
  selector: 'app-single-tenkey',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SingleTenkeyComponent),
      multi: true,
    },
  ],
})
export class SingleTenkeyComponent implements ControlValueAccessor{

  @Input()
  numbers = [...Array(9)].map((_, i) => i + 1)
  selected: number | undefined

  @Input()
  columnWidth: number = 3

  onChange: (obj: any) => void = () => {}
  registerOnChange(fn: (obj: any) => void): void {
    this.onChange = fn
  }

  onTouch: (obj: any) => void = () => {}

  registerOnTouched(fn: (obj: any) => void): void {
    this.onTouch = fn
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: number): void {
    const newSelected = this.initialSelected()
    this.selected = obj //newSelected.map((_, index) => obj === index + 1)
  }

  onToggle(value: number) {
    this.selected =  value
    this.onChange(this.selected)
    this.onTouch(this.selected)
  }

  get grid() {
    return [...Array(this.columnWidth)].map(() => '1fr').join(' ')
  }
  // private getOutputValue(): number {
  //   return this.selected.findIndex((value) => value) + 1
  //     // .map((select, index) => select ? index + 1 : 0)
  //     // .filter(value => value !== 0)
  // }

  private initialSelected() {
    return this.numbers.map(() => false)
  }
}
