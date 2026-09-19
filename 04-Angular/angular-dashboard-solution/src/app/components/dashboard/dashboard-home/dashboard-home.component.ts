import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { LatestInvoicesComponent } from './latest-invoices/latest-invoices.component';
import { RevenueChartComponent } from './revenue-chart/revenue-chart.component';

@Component({
    selector: 'app-dashboard-home',
    imports: [
        CardsComponent,
        RevenueChartComponent,
        LatestInvoicesComponent
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './dashboard-home.component.html'
})
export class DashboardHomeComponent {
}