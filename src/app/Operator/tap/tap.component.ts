import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  myColor: string = '';

  constructor() {}

  printData(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }

  ngOnInit(): void {
    const Arr = ['Angular', 'Angular CLI', 'Javscripts', 'Typescripts', 'Rxjs'];

    const source$ = interval(1500).pipe(take(10));

    let ObsSubcription: Subscription;

    ObsSubcription = source$
      .pipe(
        tap((res) => {
          if (res == 3) {
            ObsSubcription.unsubscribe();
          }
        }),
        map((res) => Arr[res])
      )
      .subscribe((res) => {
        console.log(res);
        this.printData(res, 'elContainer');
      });

    const Color = ['red', 'green', 'pink', 'blue  ', 'yellow'];

    const source$2 = interval(1500).pipe(take(10));

    let ObsSubcription2: Subscription;

    ObsSubcription2 = source$2
      .pipe(
        tap((res) => {
          this.myColor = Color[res];
          if (res == 3) {
            ObsSubcription.unsubscribe();
          }
        }),
        map((res) => Color[res])
      )
      .subscribe((res) => {
        console.log(res);
        this.printData(res, 'elContainer2');
      });
  }
}
