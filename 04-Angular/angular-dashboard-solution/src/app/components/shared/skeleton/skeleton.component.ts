import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [],
  templateUrl: './skeleton.component.html',
  styleUrls: [ './skeleton.component.css' ]
})
export class SkeletonComponent {
  @Input() type: string = 'n/a';
}