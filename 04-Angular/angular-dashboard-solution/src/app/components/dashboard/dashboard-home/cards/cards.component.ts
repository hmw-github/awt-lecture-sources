import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BackendService } from '../../../../services/backend.service';

import { SkeletonComponent } from "../../../shared/skeleton/skeleton.component";

class CardDescription {
  constructor(public title: string, public value: number, public type: string) {
  }
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {
  loading: boolean = true;
  cardDescriptions: CardDescription[] = [];

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.fetchCardData().subscribe(data => {
      this.cardDescriptions = [
        new CardDescription('Collected', data.totalPaidInvoices, 'collected'),
        new CardDescription('Pending', data.totalPendingInvoices, 'pending'),
        new CardDescription('Invoices', data.numberOfInvoices, 'invoices'),
        new CardDescription('Total Customers', data.numberOfCustomers, 'customers'),
      ];
      this.loading = false;
    });
  }

  iconName(type: string): string {
    switch (type) {
      case 'collected': return 'payments';
      case 'pending': return 'pending_actions';
      case 'invoices': return 'content_copy';
      case 'customers': return 'groups';
      default: return 'error';
    }
  }
 }