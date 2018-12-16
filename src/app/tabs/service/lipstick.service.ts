import {Injectable} from '@angular/core';
import {Brand} from '../data/brand';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LipstickService {

    brands: Brand[] = [
        {id: 1, code: 'ysl', name: 'ysl'}
    ];

    constructor() {
    }


    getBrands(): Observable<Brand[]> {
        return of(this.brands);
    }
}
