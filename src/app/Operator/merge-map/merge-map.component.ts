import { Component, OnInit } from '@angular/core';
import { of, from, mergeMap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit {
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

    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
    });
  }
}
