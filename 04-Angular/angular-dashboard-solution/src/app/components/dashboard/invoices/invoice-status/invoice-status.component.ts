import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-status',
  standalone: true,
  imports: [NgClass],
  templateUrl: './invoice-status.component.html',
})
export class InvoiceStatusComponent implements OnInit{
  @Input() status!: string;

  classList: string = '';

  ngOnInit() {
    this.classList = 'inline-flex items-center rounded-full px-2 py-1 text-xs ';
    if (this.status === 'pending') {
      this.classList += 'bg-gray-100 text-gray-500';
    } else if (this.status === 'paid') {
      this.classList += 'bg-green-500 text-white';
    }
  }
}