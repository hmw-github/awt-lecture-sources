import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { LatestInvoicesComponent } from './latest-invoices/latest-invoices.component';
import { RevenueChartComponent } from './revenue-chart/revenue-chart.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CardsComponent,
    RevenueChartComponent,
    LatestInvoicesComponent
],
  templateUrl: './dashboard-home.component.html'
})
export class DashboardHomeComponent {
}