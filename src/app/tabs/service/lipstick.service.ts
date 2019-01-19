import {Injectable} from '@angular/core';
import {Brand} from '../../common/data/brand';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Category} from '../../common/data/category';
import {LipstickListItem} from '../../common/data/lipstick-list-item';

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

    search(brands: string, categorise: string, colorNo: string): Observable<LipstickListItem[]> {
        const params = new HttpParams()
            .set('brands', brands)
            .set('categories', categorise)
            .set('colorNo', colorNo);
        return this.httpClient.get<LipstickListItem[]>('/api/lipstick/search/', {params: params});
    }

    getBySkuCode(skuCode: string): Observable<LipstickListItem> {
        return this.httpClient.get<LipstickListItem>(`/api/lipstick/product/sku/${skuCode}`);
    }
}
