import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DemoModule } from '../../modules/demo.module';

@Component({
    selector: 'app-module-demo',
    templateUrl: './moduleDemo.component.html',
    styleUrls: ['./moduleDemo.component.css'],
    standalone: true,
    imports: [DemoModule]
})
export class ModuleDemoComponent implements OnInit {
    public greeting: string = '';
    private module: DemoModule = new DemoModule();

    public constructor(
        private location: Location){
    }

    public ngOnInit(): void {
        this.greeting = this.module.info();
    }

    public back(): void {
        this.location.back();
    }
}