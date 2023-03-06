import { Component, OnInit } from '@angular/core';
import { of, scan } from 'rxjs';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
})
export class ScanComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    source$
      .pipe(
        scan((acc, val) => {
          return acc + val;
        }, 0)
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
