import { Component, OnInit } from '@angular/core';
import { formatCurrency, formatDateToLocal } from '../../../../utils';

import { BackendService, ITEMS_PER_PAGE } from '../../../../services/backend.service';
import { LatestInvoice } from '../../../../models/LatestInvoice';
import { InvoiceStatusComponent } from '../invoice-status/invoice-status.component';
import { SubscriptionService } from '../../../../services/subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices-table',
  standalone: true,
  imports: [InvoiceStatusComponent],
  templateUrl: './invoices-table.component.html',
})
export class InvoiceTableComponent implements OnInit {
  // make external functions usable in template
  formatDateToLocal = formatDateToLocal;
  formatCurrency = formatCurrency;
  Number = Number;

  invoices: LatestInvoice[] = [];
  currentPage = 1;
  query = '';

  constructor(private backendService: BackendService,
      private subscriptionService: SubscriptionService,
      private router: Router) {
    this.subscriptionService.currentPage$
    .subscribe(page => {
      this.currentPage = page;
      this.loadInvoices();
    });
    this.subscriptionService.searchTerm$
    .subscribe(term => {
      this.query = term;
      this.currentPage = 1;
      this.loadInvoices();
    });
  }

  private loadInvoices(): void {
    console.log('Loading invoices...');
    this.backendService.fetchFilteredInvoices(this.query, this.currentPage)
    .subscribe(invoices => {
      this.invoices = invoices;
      this.backendService.fetchInvoicesPages(this.query).subscribe(noPages => {
        this.currentPage = 1;
        this.subscriptionService.updateTotalPages(noPages);
      });
    });
  }

  ngOnInit() {
    this.loadInvoices();
  }

  edit(id: string) {
    this.router.navigate(['dashboard', 'edit-invoice', id]);
  }

  delete(id: string) {
    this.backendService.deleteInvoice(id)
    .subscribe(_ => {
      this.loadInvoices();
    });
  }
}