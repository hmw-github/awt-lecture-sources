import { NgModule } from '@angular/core';
import { DataService } from '../services/dataService.service';
import { PhotoListComponent } from '../components/photo-list/photoList.component';

@NgModule ({
    declarations: [
    // all components of this module
    PhotoListComponent
  ],
  imports: [
    // other components we need in this module
  ],
  exports: [
    // Components we make available to other components/modules
    PhotoListComponent
  ],
  providers: [
    // Services
    DataService
  ]
})
export class DemoModule {
    public info(): string {
        return 'This is a module collecting a PhotoList component and the DataService.';
    }
}