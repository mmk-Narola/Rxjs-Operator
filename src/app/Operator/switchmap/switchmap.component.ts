import { Component, OnInit } from '@angular/core';
import {
  of,
  from,
  mergeMap,
  switchMap,
  map,
  interval,
  filter,
  take,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss'],
})
export class SwitchmapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    of(1, 2, 3, 4, 5)
      .pipe(
        switchMap((id) => {
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
            map((data) => {
              return data.response;
            })
          );
        })
      )
      .subscribe((res) => {
        console.log(res);
      });

    // interval(1000)
    //   .pipe(
    //     filter((id) => id > 0),
    //     switchMap((id) => {
    //       return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
    //         map((data) => {
    //           return data.response;
    //         })
    //       );
    //     }),
    //     take(5)
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
}
