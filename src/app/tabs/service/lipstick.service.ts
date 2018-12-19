import {Injectable} from '@angular/core';
import {Brand} from '../data/brand';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LipstickService {

    brands: Brand[] = [
        {id: 1, code: 'ysl', name: 'ysl'}
    ];

    constructor(private httpClient: HttpClient) {
    }


    getBrands(): Observable<Brand[]> {
        return this.httpClient.get<Brand[]>('/api/lipstick/product/brands');
    }
}
