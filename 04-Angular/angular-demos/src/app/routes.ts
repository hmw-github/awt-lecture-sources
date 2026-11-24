import { Routes } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { ModuleDemoComponent } from "./components/module-demo/moduleDemo.component";
import { ServiceCallerComponent } from "./components/service-caller/serviceCaller.component";
import { LoginComponent } from "./components/login/login.component";
import { ManageStudentsComponent } from "./components/manage-students/manage-students.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { HelloComponent } from "./components/hello/hello.component";
import { SquareNumbersComponent } from "./components/square-numbers/square-numbers.component";

/**
 * Routing table
 * How does routing work?
 * 1. How can you change the current route (=path-suffix)?
 *      a) [routerLink]="['/service']"
 *      b) this.router.navigate(['/newRoute']);
 * 2. What happens when the route is changed? the routing table is used to determine the component to display
 *    in <router-outlet>
 * 3. How can you place the routing result (=component)? use <router-outlet> in the template where you want it
 */

const routeConfig: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'module', component: ModuleDemoComponent },
    { path: 'component', component: SquareNumbersComponent },
    { path: 'service', component: ServiceCallerComponent },
    { path: 'login', component: LoginComponent },
    { path: 'students', component: ManageStudentsComponent },
    { path: 'collection', component: CollectionComponent },
    { path: 'hello', component: HelloComponent },
];

export default routeConfig;