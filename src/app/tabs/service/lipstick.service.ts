import {Injectable} from '@angular/core';
import {Brand} from '../../common/data/brand';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Category} from '../../common/data/category';
import {LipstickItem} from '../../common/data/lipstick-item';

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

    search(brands: string, categorise: string, colorNo: string): Observable<LipstickItem[]> {
        const params = new HttpParams()
            .set('brands', brands)
            .set('categories', categorise)
            .set('colorNo', colorNo);
        return this.httpClient.get<LipstickItem[]>('/api/lipstick/search/', {params: params});
    }
}
