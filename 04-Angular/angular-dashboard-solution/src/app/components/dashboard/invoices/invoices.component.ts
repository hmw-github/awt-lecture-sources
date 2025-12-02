import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../shared/search/search.component';
import { InvoiceTableComponent } from "./invoices-table/invoices-table.component";
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { BackendService } from '../../../services/backend.service';
import { SubscriptionService } from '../../../services/subscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [SearchComponent, InvoiceTableComponent, PaginationComponent],
  templateUrl: './invoices.component.html',
})
export class InvoicesComponent implements OnInit {
  totalPages!: number;
  currentPage!: number;
  query!: string;

  constructor(private backendService: BackendService,
      private subscriptionService: SubscriptionService,
    private router: Router) {
    this.query = this.subscriptionService.searchTerm.getValue();
    this.subscriptionService.currentPage$.subscribe(page => {
      this.currentPage = page;
    });
    this.subscriptionService.totalPages$.subscribe(noPages => {
      this.totalPages = noPages;
    });
  }

  ngOnInit(): void {
    this.backendService.fetchInvoicesPages(this.query).subscribe(noPages => {
      this.totalPages = noPages;
      this.currentPage = 1;
    });
  }

  createInvoice(): void {
    this.router.navigate(['/dashboard/create-invoice']);
  }
}