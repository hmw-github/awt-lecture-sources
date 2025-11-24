import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Photo } from '../../models/Photo';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/dataService.service';

@Component({
    selector: 'app-photo-list',
    standalone: false,
    templateUrl: './photoList.component.html',
    styleUrls: ['./photoList.component.css']
})
export class PhotoListComponent implements OnInit  {
    public photos: Photo[] | null = null;
    public noLoaded: number = 0;

    public constructor(private location: Location, private dataService: DataService) {
    }

    public getURL(): string {
        return this.dataService.getURL();
    }

    public ngOnInit(): void {
        this.photos = null;
        this.dataService.getPhotos()
        .subscribe({
            next: (photos) => {
                this.photos = photos;
                this.noLoaded = photos.length;
            },
            error: (err) => alert('Error calling server: ' + err)
        });
    }

    public back(): void {
        this.location.back();
    }
}