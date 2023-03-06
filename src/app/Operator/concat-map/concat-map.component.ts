import { Component, OnInit } from '@angular/core';
import { concatMap, from, map, of, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  data: any;
  constructor() {}

  getData(data) {
    return of(data + ' ConcatMap ADD');
  }

  ngOnInit() {
    const source = from([
      'Angular',
      'Angular CLI',
      'Javscripts',
      'Typescripts',
      'Rxjs',
    ]);

    // source.pipe(map((res) => this.getData(res))).subscribe((res) =>
    //   res.subscribe((res) => {
    //     console.log(res);
    //   })
    // );

    source.pipe(concatMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
