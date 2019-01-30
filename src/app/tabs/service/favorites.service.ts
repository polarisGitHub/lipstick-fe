import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToastService} from './toast.service';

@Injectable({
    providedIn: 'root'
})
export class FavoritesService {

    constructor(private httpClient: HttpClient,
               ) {

    }

    saveFavorite(brandCode: string, skuCode: string): Observable<string> {
        return this.httpClient.post<string>(`/api/lipstick/favorites/save`, {brandCode: brandCode, skuCode: skuCode});
    }
}
