import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Favorites} from '../../common/data/favorites';

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

    queryFavorite(): Observable<Favorites> {
        return this.httpClient.get<Favorites>(`/api/lipstick/favorites/query`);
    }

    delete(id: string): Observable<string> {
        return this.httpClient.post<string>(`/api/lipstick/favorites/delete`, {id: id});
    }
}
