import {Component, Input} from '@angular/core';
import {SumBox} from '../sum-box';

type Summary = {numeric: number, exist: boolean};

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() results: SumBox[] | null= [];

  get summary(): Summary[] {
    const totalNumbers =  this.results?.map((result) => {
      return result.numberParts;
    }).flat() ?? [];

    const numerics: number[] = Array(9).fill(0).map((_, index) => index + 1);
    const summary: Summary[] = numerics.map((numeric) => {
      return {
        numeric,
        exist: totalNumbers.includes(numeric)
      }
    });
    return summary;
  }
}
