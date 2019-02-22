import {Injectable} from '@angular/core';
import {Brand} from '../../common/data/brand';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Category} from '../../common/data/category';
import {LipstickListItem} from '../../common/data/lipstick-list-item';
import {PullResult} from '../../common/data/pull-result';

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

    search(brands: string, categorise: string, colorNo: string, nextId: string): Observable<PullResult<LipstickListItem>> {
        let params = new HttpParams()
            .set('brands', brands)
            .set('categories', categorise)
            .set('colorNo', colorNo)
            .set('pageSize', '5');
        if (nextId) {
            params = params.set('nextId', nextId);
        }
        return this.httpClient.get<PullResult<LipstickListItem>>('/api/lipstick/search', {params: params});
    }

    getBySkuCode(brandCode: string, skuCode: string): Observable<LipstickListItem> {
        return this.httpClient.get<LipstickListItem>(`/api/lipstick/product/sku/${brandCode}/${skuCode}`);
    }
}
