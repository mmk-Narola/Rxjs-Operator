import { Component, OnInit } from '@angular/core';
import { interval, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss'],
})
export class StartWithComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let dataObs$ = interval(3000);

    dataObs$
      .pipe(startWith(10, 20, 30, 'a', 'r', 's', 'd', 'da'))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
