import { Component, OnInit } from '@angular/core';
import { of, concat, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let newObe$ = new Observable((observer) => {
      observer.next(45);
      observer.next(7451);
      setTimeout(() => {
        observer.next(524);
        observer.complete();
      }, 2000);
    });

    let sourceObs$ = of(1, 3, 4, 5, 6, 7, 8);

    let sourceObs1$ = of('a', 'f', 'e', 't', 'g');

    concat(newObe$, sourceObs$, sourceObs1$).subscribe((res) => {
      console.log(res);
    });
  }
}
