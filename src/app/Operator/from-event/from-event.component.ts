import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('validated') validate!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  rxjsFromEvent() {
    const observeble$ = fromEvent(this.validate?.nativeElement, 'click');
    observeble$.subscribe((res) => {
      console.log(res);
    });
  }
}
