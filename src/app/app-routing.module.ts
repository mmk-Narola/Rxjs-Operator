import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { MergeMapComponent } from './Operator/merge-map/merge-map.component';
import { ConcatMapComponent } from './Operator/concat-map/concat-map.component';
import { ScanComponent } from './Operator/scan/scan.component';
import { SwitchmapComponent } from './Operator/switchmap/switchmap.component';
import { TapComponent } from './Operator/tap/tap.component';
import { ShareComponent } from './Operator/share/share.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'from', component: FromComponent },
  { path: 'fromEvent', component: FromEventComponent },
  { path: 'of', component: OfComponent },
  { path: 'combineLatest', component: CombineLatestComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'startWith', component: StartWithComponent },
  { path: 'withLastestFrom', component: WithLatestFromComponent },
  { path: 'zip', component: ZipComponent },
  { path: 'debounceTime', component: DebounceTimeComponent },
  { path: 'distinctUntilChanged', component: DistinctUntilChangedComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'takeUntil', component: TakeUntilComponent },
  { path: 'bufferTime', component: BufferTimeComponent },
  { path: 'concatMap', component: ConcatMapComponent },
  { path: 'mergeMap', component: MergeMapComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'switchMap', component: SwitchmapComponent },
  { path: 'tap', component: TapComponent },
  { path: 'share', component: ShareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
