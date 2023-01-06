import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // writeValue(state: boolean): void {
  //   this.state = state
  // }
  // onChange: (obj: any) => void = () => {};
  // registerOnChange(fn: any): void {
  //   this.onChange = fn;
  // }
  // onTouched: (obj: any) => void = () => {};
  // registerOnTouched(fn: any): void {
  //   this.onTouched = fn;
  // }

  @Input()
  state: boolean = false
  @Output()
  toggle = new EventEmitter<boolean>()

  onClick() {
    this.state = !this.state
    this.toggle.emit(this.state)
  }
}
