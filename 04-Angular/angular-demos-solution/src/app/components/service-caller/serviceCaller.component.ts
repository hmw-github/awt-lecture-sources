import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Photo } from '../../models/Photo';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/dataService.service';

@Component({
    selector: 'app-service-caller',
    standalone: true,
    imports: [
    FormsModule
],
    templateUrl: './serviceCaller.component.html',
    styleUrls: ['./serviceCaller.component.css']
})
export class ServiceCallerComponent  {
    public noPhotos: number = 0;
    public photos: Photo[] | null = null;
    public noLoaded: number = 0;
    //private dataService: DataService = inject(DataService);

    public constructor(private location: Location, private dataService: DataService) {
    }

    public getURL(): string {
        return this.dataService.getURL();
    }

    public show(): void {
        this.photos = null;
        if (this.noPhotos <= 0) {
            return;
        }

        this.dataService.getPhotos()
        .subscribe({
            next: (photos) => {
                this.photos = [];
                this.noLoaded = photos.length;
                const noPhotos = Math.min(
                    this.noPhotos, photos.length);

                for (let i = 0; i < noPhotos; ++i) {
                    this.photos.push(photos[i]);
                }
            },
            error: (err) => alert('Error calling server: ' + err)
        });
    }

    public back(): void {
        this.location.back();
    }
}