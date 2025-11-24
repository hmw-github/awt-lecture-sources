import { Routes } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { ModuleDemoComponent } from "./components/module-demo/moduleDemo.component";
import { ServiceCallerComponent } from "./components/service-caller/serviceCaller.component";
import { LoginComponent } from "./components/login/login.component";
import { ManageStudentsComponent } from "./components/manage-students/manage-students.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { HelloComponent } from "./components/hello/hello.component";
import { SquareNumbersComponent } from "./components/square-numbers/square-numbers.component";


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