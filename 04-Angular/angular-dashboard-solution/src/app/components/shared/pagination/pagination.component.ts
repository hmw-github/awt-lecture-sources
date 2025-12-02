import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SubscriptionService } from '../../../services/subscription.service';
import { NgClass } from '@angular/common';
import { generatePagination } from '../../../utils';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnChanges {
  @Input() totalPages!: number;
  @Input() currentPage!: number;

  Number = Number; // make Number operator usable in template

  pages: (string | number)[] = [];

  constructor(private subscriptionService: SubscriptionService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes: ${JSON.stringify(changes)}`);
    this.pages = generatePagination(this.currentPage, this.totalPages);
  }

  arrowClasses(direction: 'left' | 'right', isDisabled: boolean): string {
    let classes = 'material-symbols-outlined flex h-10 w-10 items-center justify-center rounded-md border';
    classes += direction === 'left' ? ' mr-2 md:mr-4' : ' ml-2 md:ml-4';
    classes += isDisabled ? ' pointer-events-none text-gray-300' : ' hover:bg-gray-100';
    return classes;
  }

  numberClasses(page: number | string, index: number): string {
    let position: 'first' | 'last' | 'single' | 'middle' | undefined;
    let isActive = this.currentPage === page;

    if (index === 0)
      position = 'first';
    if (index === this.pages.length - 1)
      position = 'last';
    if (this.pages.length === 1)
      position = 'single';
    if (page === '...')
      position = 'middle';

    let classes = 'flex h-10 w-10 items-center justify-center text-sm border';
    if (position === 'first' || position === 'single') {
      classes += ' rounded-l-md';
    }
    if (position === 'last' || position === 'single') {
      classes += ' rounded-r-md';
    }
    if (isActive) {
      classes += ' z-10 bg-blue-600 border-blue-600 text-white';
    }
    if (!isActive && position !== 'middle') {
      classes += ' hover:bg-gray-100';
    }
    if (position === 'middle') {
      classes += ' text-gray-300';
    }

    return classes;
  }

  gotoPage(page: number, isDisabled: boolean) {
    if (!isDisabled)
      this.subscriptionService.updateCurrentPage(page);
  }
}