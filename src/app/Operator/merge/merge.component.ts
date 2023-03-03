import { Component, OnInit } from '@angular/core';
import { interval, merge, of } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source1$ = interval(1000);
    let source2$ = of('a', 'aes', 'seads');

    // merge(source1$, source2$).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
