import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, fromEvent, map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit, AfterViewInit {
  //source

  nameSource = ['Mahesh', 'Mohan', 'Sarthak', 'Kshirsagar'];
  colorSource = ['red', 'yellow', 'blue', 'gray', 'green'];

  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const nameObs$ = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((event) => event.target.value)
    );

    const colorObs$ = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      map((event) => event.target.value)
    );

    combineLatest(nameObs$, colorObs$).subscribe(([a, color]) => {
      console.log(a, color);
      this.creatbox(a, color, 'elContainer');
    });

    // const weight = of(70, 72, 76, 79, 75);
    // const height = of(1.76, 1.77, 1.78);
    // const bmi = combineLatest([weight, height]).pipe(
    //   map(([w, h]) => w / (h * h))
    // );
    // bmi.subscribe((x) => console.log('BMI is ' + x));

    const color$ = new Observable<string>((observer) => {
      // You can use any method to get the color, such as a user input or a random generator
      const color =
        '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'); // Generate a random color
      observer.next(color);
    });

    const size$ = new Observable<number>((observer) => {
      // You can use any method to get the size, such as a user input or a random generator
      const size = Math.floor(Math.random() * 100) + 50; // Generate a random size between 50 and 149
      observer.next(size);
    });

    const box$ = combineLatest([color$, size$]).pipe(
      map(([color, size]) => {
        return {
          color,
          size,
          style: {
            'background-color': color,
            width: `${size}px`,
            height: `${size}px`,
          },
        };
      })
    );

    box$.subscribe((box) => {
      console.log(box); // { color: "#123456", size: 100, style: { 'background-color': "#123456", width: "100px", height: "100px" } }
    });
  }

  creatbox(name: any, color: any, containerId: any) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', color);
    document.getElementById(containerId).appendChild(el);
  }
}
