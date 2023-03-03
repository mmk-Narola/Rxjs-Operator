import { Component, OnInit } from '@angular/core';
import { bufferTime, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.scss'],
})
export class BufferTimeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000)
      .pipe(bufferTime(1000, 2000))
      .subscribe((data) => {
        // console.log(data);
      });
  }
}
