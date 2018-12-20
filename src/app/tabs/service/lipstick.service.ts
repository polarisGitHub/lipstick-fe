import {Injectable} from '@angular/core';
import {Brand} from '../data/brand';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LipstickService {

    constructor(private httpClient: HttpClient) {
    }


    getBrands(): Observable<Brand[]> {
        return this.httpClient.get<Brand[]>('/api/lipstick/product/brands');
    }
}
