import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-skeleton',
    imports: [],
    templateUrl: './skeleton.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent {
  @Input() type: string = 'n/a';
}