import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  // use Subjects to keep the data that others might want to observe
  searchTerm = new BehaviorSubject<string>('');
  currentPage = new BehaviorSubject<number>(1);
  totalPages = new BehaviorSubject<number>(0);

  // Observables for other components to subscribe to
  searchTerm$ = this.searchTerm.asObservable();
  currentPage$ = this.currentPage.asObservable();
  totalPages$ = this.totalPages.asObservable();

  // called when new invoice has been created or an invoice has changed
  updateInvoiceData() {
    console.log(`updateInvoiceData: new or changed invoice`);
    this.searchTerm.next(this.searchTerm.getValue()); // causes table to refresh
  }

  updateSearchTerm(term: string) {
    console.log(`updateSearchTerm: ${term}`);
    this.searchTerm.next(term);
  }

  updateCurrentPage(page: number) {
    console.log(`updateCurrentPage: ${page}`);
    this.currentPage.next(page);
  }

  updateTotalPages(pages: number) {
    console.log(`updateTotalPages: ${pages}`);
    this.totalPages.next(pages);
  }
}