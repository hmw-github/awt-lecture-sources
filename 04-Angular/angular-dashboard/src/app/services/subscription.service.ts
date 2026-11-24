import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Central service for sharing state between components that are not in a
 * direct parent/child relationship (e.g. search field, pagination and the
 * invoices table).
 *
 * How it works:
 * - Each piece of shared state is stored in an RxJS `BehaviorSubject`.
 *   A BehaviorSubject always holds a current value (initialised here with
 *   '', 1 and 0) and immediately emits that value to every new subscriber.
 * - For every subject a read-only Observable (suffix `$`) is exposed via
 *   `asObservable()`. Components subscribe to these to be notified on changes,
 *   without being able to emit values themselves.
 * - Values are changed only through the `update...()` methods, which call
 *   `next()` on the corresponding subject and thereby notify all subscribers.
 * - Because the service is `providedIn: 'root'`, Angular creates exactly one
 *   instance (singleton) that is shared by all components injecting it.
 *
 * Usage (paths relative to src/app/):
 * 1. Inject the service via the constructor (done in all files listed below):
 *      constructor(private subscriptionService: SubscriptionService) {}
 *
 * 2. Publish a change (producer side):
 *      this.subscriptionService.updateSearchTerm('acme');
 *        -> components/shared/search/search.component.ts
 *      this.subscriptionService.updateCurrentPage(2);
 *        -> components/shared/pagination/pagination.component.ts
 *      this.subscriptionService.updateTotalPages(5);
 *        -> components/dashboard/invoices/invoices-table/invoices-table.component.ts
 *
 * 3. React to changes (consumer side):
 *      this.subscriptionService.searchTerm$.subscribe(term => this.loadInvoices(term));
 *        -> components/dashboard/invoices/invoices-table/invoices-table.component.ts
 *           (subscribes to searchTerm$ and currentPage$)
 *        -> components/dashboard/invoices/invoices.component.ts
 *           (subscribes to currentPage$ and totalPages$)
 *
 * 4. Read the current value synchronously, without subscribing:
 *      const term = this.subscriptionService.searchTerm.getValue();
 *        -> components/shared/search/search.component.ts
 *        -> components/dashboard/invoices/invoices.component.ts
 *
 * 5. Force a refresh of the invoice table after an invoice was created or
 *    edited (re-emits the current search term):
 *      this.subscriptionService.updateInvoiceData();
 *        -> components/dashboard/invoices/invoice-form/invoice-form.component.ts
 *
 * Note: Subscriptions should be unsubscribed when the component is destroyed
 * (e.g. in `ngOnDestroy` or with `takeUntilDestroyed()`) to avoid memory leaks.
 */
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  // use Subjects to keep the data that others might want to observe
  searchTerm = new BehaviorSubject<string>('');
  currentPage = new BehaviorSubject<number>(1);
  totalPages = new BehaviorSubject<number>(0);

  // Observables above components to subscribe to
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