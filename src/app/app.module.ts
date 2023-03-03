import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromComponent } from './Operator/from/from.component';
import { ListComponent } from './list/list.component';
import { FromEventComponent } from './Operator/from-event/from-event.component';
import { OfComponent } from './Operator/of/of.component';
import { CombineLatestComponent } from './Operator/combine-latest/combine-latest.component';
import { ConcatComponent } from './Operator/concat/concat.component';
import { MergeComponent } from './Operator/merge/merge.component';
import { StartWithComponent } from './Operator/start-with/start-with.component';
import { WithLatestFromComponent } from './Operator/with-latest-from/with-latest-from.component';
import { ZipComponent } from './Operator/zip/zip.component';
import { DebounceTimeComponent } from './Operator/debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './Operator/distinct-until-changed/distinct-until-changed.component';
import { FilterComponent } from './Operator/filter/filter.component';
import { TakeUntilComponent } from './Operator/take-until/take-until.component';
import { BufferTimeComponent } from './Operator/buffer-time/buffer-time.component';
import { ConcatMapComponent } from './Operator/concat-map/concat-map.component';
import { MergeMapComponent } from './Operator/merge-map/merge-map.component';
import { ScanComponent } from './Operator/scan/scan.component';
import { SwitchmapComponent } from './Operator/switchmap/switchmap.component';
import { TapComponent } from './Operator/tap/tap.component';
import { ShareComponent } from './Operator/share/share.component';

@NgModule({
  declarations: [AppComponent, FromComponent, ListComponent, FromEventComponent, OfComponent, CombineLatestComponent, ConcatComponent, MergeComponent, StartWithComponent, WithLatestFromComponent, ZipComponent, DebounceTimeComponent, DistinctUntilChangedComponent, FilterComponent, TakeUntilComponent, BufferTimeComponent, ConcatMapComponent, MergeMapComponent, ScanComponent, SwitchmapComponent, TapComponent, ShareComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
