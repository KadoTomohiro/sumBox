import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {range, toArray} from "rxjs";

@Component({
  selector: 'app-tenkey',
  templateUrl: './tenkey.component.html',
  styleUrls: ['./tenkey.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TenkeyComponent),
      multi: true,
    },
  ],
})
export class TenkeyComponent implements ControlValueAccessor{

  @Input()
  numbers = [...Array(9)].map((_, i) => i + 1)
  selected: boolean[] = this.initialSelected()

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

  writeValue(obj: number[]): void {
    const newSelected = this.initialSelected()
    this.selected = newSelected.map((_, index) => obj.includes(index + 1))
  }

  onToggle(value: boolean, index: number) {
    const temp = Array.from(this.selected)
    temp[index] = value
    this.selected = temp
    this.onChange(this.getOutputValue())
    this.onTouch(this.getOutputValue())
  }

  private getOutputValue(): number[] {
    return this.selected
      .map((select, index) => select ? index + 1 : 0)
      .filter(value => value !== 0)
  }

  private initialSelected() {
    return this.numbers.map(() => false)
  }
}
