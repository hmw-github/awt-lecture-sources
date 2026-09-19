import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-menu',
    imports: [
        RouterLink
    ],
    templateUrl: './menu.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public constructor() {
    }

    public ngOnInit(): void {
    }
}