import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DebounceService } from '../../../services/debounce.service';
import { SubscriptionService } from '../../../services/subscription.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Input() placeholder!: string;
  searchTerm!: string;

  constructor(private debounceService: DebounceService,
    private subscriptionService: SubscriptionService) {
  }

  ngOnInit(): void {
    this.searchTerm = this.subscriptionService.searchTerm.getValue();
  }

  onInputChange(event: any) {
    const value = event.target.value;

    this.debounceService.debounce('search', () => {
      this.searchTerm = value;
      this.onSearch(value); // Your debounced search function
    }, 500);  // 500ms debounce time
  }

  /**
   * Add current search term to URL and refresh current page
   * @param term
   */
  onSearch(term: string) {
    console.log('Searching for:', term);
    this.subscriptionService.updateSearchTerm(term);
  }

}