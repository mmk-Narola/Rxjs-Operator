import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit {
  data!: any;

  constructor() {}

  ngOnInit(): void {
    const Observ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 78, 54, 62, 100]);

    Observ.pipe(
      filter((resp) => resp % 2 === 0),
      map((ab) => ab * 10)
    ).subscribe((res) => {
      console.log(res);
    });
  }

  start() {}
}
