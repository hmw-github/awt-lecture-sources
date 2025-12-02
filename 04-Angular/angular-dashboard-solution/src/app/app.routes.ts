import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { InvoicesComponent } from './components/dashboard/invoices/invoices.component';
import { CustomersComponent } from './components/dashboard/customers/customers.component';
import { InvoiceFormComponent } from './components/dashboard/invoices/invoice-form/invoice-form.component';


/**
 * see https://angular.dev/guide/routing/common-router-tasks
 */
export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // No guard needed for the login page
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'create-invoice', component: InvoiceFormComponent },
      { path: 'edit-invoice/:invoiceId', component: InvoiceFormComponent },
      { path: 'customers', component: CustomersComponent },
    ]
   },
   { path: '', component: LandingPageComponent, pathMatch: 'full' },
   { path: '**', redirectTo: '' }
 ];