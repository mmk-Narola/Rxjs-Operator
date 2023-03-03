import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //filter out non-even numbers
    const example = source.pipe(filter((num) => num % 2 === 0));
    const subscribe = example.subscribe((val) =>
      console.log(`Even number: ${val}`)
    );
  }
}
