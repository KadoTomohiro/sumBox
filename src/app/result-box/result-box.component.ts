import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['./result-box.component.css']
})
export class ResultBoxComponent {

  @Input()
  result: number[] = []

  @Input()
  disabled: boolean = false;
}
