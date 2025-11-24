import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/Photo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private readonly url = 'https://jsonplaceholder.typicode.com';

    public constructor(private httpClient: HttpClient) {
    }

    public getPhotos(): Observable<Photo[]> {
        return this.httpClient.get(this.url + '/photos') as Observable<Array<Photo>>;
    }

    public getURL(): string {
        return this.url;
    }
}