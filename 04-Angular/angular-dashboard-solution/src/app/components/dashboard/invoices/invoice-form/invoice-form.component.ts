import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../../models/Customer';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Invoice } from '../../../../models/Invoice';
import { SubscriptionService } from '../../../../services/subscription.service';
import { formatCurrency } from '../../../../utils';

export function minZeroValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = control.value !== null && control.value > 0;
    console.log(`minZeroValidator: ${isValid}`);
    return isValid ? null : { 'minZero': { value: control.value } };
  };
}

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './invoice-form.component.html',
})
export class InvoiceFormComponent implements OnInit {
  formatCurrency = formatCurrency;
  invoiceId: string | null = null;
  customers: Customer[] = [];
  customerError: string = '';
  statusError: string = '';
  form: FormGroup;
  oldInvoice: Invoice | null = null;

  constructor(private backendService: BackendService, private router: Router,
      private formBuilder: FormBuilder, private subscriptionService: SubscriptionService,
      private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      customer_id: ['', Validators.required ],
      amount: ['', [Validators.required, minZeroValidator() ]],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.paramMap.get('invoiceId');
    console.log('invoice-form: mode = ' + (this.invoiceId ? 'edit' : 'create'));

    this.backendService.fetchCustomers().subscribe(customers => {
      this.customers = customers;
      if (this.invoiceId) {
        // edit mode: get invoice
        this.backendService.fetchInvoiceById(this.invoiceId)
        .subscribe(invoice => {
          this.oldInvoice = invoice;
          this.form = this.formBuilder.group({
            customer_id: [{value: invoice?.customer_id, disabled: true}, Validators.required ],
            amount: [invoice!.amount/100.0, [Validators.required, minZeroValidator() ]],
            status: [invoice?.status, Validators.required],
          });
        });
      }
    })
  }

  selected(id: string) {
    return id == this.oldInvoice?.customer_id ? 'selected' : '';
  }

  cancel() {
    this.router.navigate(['dashboard', 'invoices']);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);

      if (this.oldInvoice) {
        // update invoice
        const invoice = new Invoice(this.oldInvoice.id, this.oldInvoice.customer_id,
          this.form.value.amount*100, this.oldInvoice.date, this.form.value.status)
        this.backendService.updateInvoice(invoice)
        .subscribe(_ => {
          console.log('Invoice updated: ', invoice);
          this.subscriptionService.updateInvoiceData();
          this.router.navigate(['dashboard', 'invoices']);
        });
      } else {
        // save new invoice
        const date = new Date().toISOString().split('T')[0];
        const invoice = new Invoice('', this.form.value.customer_id, this.form.value.amount*100,
          date, this.form.value.status)
        this.backendService.storeInvoice(invoice)
        .subscribe(invoice => {
          console.log('Invoice created: ', invoice);
          this.subscriptionService.updateInvoiceData();
          this.router.navigate(['dashboard', 'invoices']);
        });
      }
    } else {
      this.form.markAllAsTouched(); // Mark all fields as touched to display validation errors
    }
  }

  get customer() {
    return this.form.get('customer_id');
  }

  get amount() {
    return this.form.get('amount');
  }

  get status() {
    return this.form.get('status');
  }
}