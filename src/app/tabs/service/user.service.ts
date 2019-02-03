import {Injectable} from '@angular/core';
import {User} from '../../common/data/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    storageUserInfo(): void {
        this.httpClient.get<User>(`/jwt/user/info`).subscribe(l => localStorage.setItem('user', JSON.stringify(l)));
    }

    getUserInfo(): User {
        return JSON.parse(localStorage.getItem('user'));
    }


}
