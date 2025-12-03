import { Component, EventEmitter, Output } from '@angular/core';
import { LatestInvoice } from '../../../../models/LatestInvoice';

import { BackendService } from '../../../../services/backend.service';
import { formatDateToLocal } from '../../../../utils';
import { SkeletonComponent } from "../../../shared/skeleton/skeleton.component";

@Component({
  selector: 'app-latest-invoices',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './latest-invoices.component.html',
})
export class LatestInvoicesComponent {
  latestInvoices: LatestInvoice[] = [];
  loading: boolean;

  constructor(private backendService: BackendService) {
    this.loading = true;
    this.backendService.fetchLatestInvoices()
    .subscribe(invoices => {
      this.latestInvoices = invoices;
      this.loading = false;
    });
  }

  formatDate(date: string, locale: string) {
    return formatDateToLocal(date, locale);
  }

}