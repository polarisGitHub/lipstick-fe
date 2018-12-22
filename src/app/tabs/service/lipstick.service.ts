import {Injectable} from '@angular/core';
import {Brand} from '../data/brand';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../data/category';

@Injectable({
    providedIn: 'root'
})
export class LipstickService {

    constructor(private httpClient: HttpClient) {
    }


    getBrands(): Observable<Brand[]> {
        return this.httpClient.get<Brand[]>('/api/lipstick/product/brands');
    }

    getCategories(brands: string[]): Observable<Category[]> {
        const brands_str: string = brands.join(',');
        return this.httpClient.get<Category[]>(`/api/lipstick/product/categories/${brands_str}`);
    }
}
