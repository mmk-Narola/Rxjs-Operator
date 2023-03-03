import { Component, OnInit } from '@angular/core';
import { interval, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss'],
})
export class WithLatestFromComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(1000);

    source$.pipe(withLatestFrom(interval(2000))).subscribe((data) => {
      console.log(data);
    });
  }
}
