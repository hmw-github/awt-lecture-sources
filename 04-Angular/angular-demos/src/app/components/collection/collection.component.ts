import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SquareNumbersComponent } from '../square-numbers/square-numbers.component';
import { ManageStudentsComponent } from '../manage-students/manage-students.component';
import { LoginComponent } from '../login/login.component';
import { ServiceCallerComponent } from '../service-caller/serviceCaller.component';

@Component({
    selector: 'app-collection',
    imports: [
        SquareNumbersComponent,
        ManageStudentsComponent,
        LoginComponent,
        ServiceCallerComponent,
    ],
    templateUrl: './collection.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
    public constructor() {
    }
}