import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements OnInit, AfterViewInit {
  buttonEvent!: Observable<Event>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(
      document.getElementById('takeUntil')!,
      'click'
    );
  }

  startTimer() {
    interval(500)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
