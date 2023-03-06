import { Component, OnInit } from '@angular/core';
import { interval, tap, map, take, share } from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const source = interval(1000).pipe(
      tap((x) => console.log('Processing: ', x)),
      map((x) => x * x),
      take(6)
      // share()
    );

    source.subscribe((x) => console.log('subscription 1: ', x));
    source.subscribe((x) => console.log('subscription 2: ', x));
  }
}
