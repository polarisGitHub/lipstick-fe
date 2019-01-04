import {Injectable} from '@angular/core';
import {Brand} from '../../common/data/brand';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
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

    search(brands: string, categoryise: string, color: string): Observable<LipstickItem> {
        const mockLipstick: LipstickItem = {
            brandName: 'YSL',
            categoryName: '唇膏',
            goodsName: '圣罗兰莹亮纯魅液体唇膏',
            skuName: '蜜桃唇语',
            colorNo: 'N°3',
            color: '#e46264'
        };
        return of(mockLipstick);
    }
}
