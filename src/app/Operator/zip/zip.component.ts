import { Component, OnInit } from '@angular/core';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss'],
})
export class ZipComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = of(1, 2, 3, 4, 5, 67, 8, 9);
    let source2$ = of('a', 'a', 'dds', 'ers', 'ddgfd');

    zip(source$, source2$).subscribe((data) => {
      console.log(data);
    });
  }
}
