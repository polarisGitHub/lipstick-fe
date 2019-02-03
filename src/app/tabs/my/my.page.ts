import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Favorites} from '../../common/data/favorites';
import {FavoritesService} from '../service/favorites.service';
import {ToastService} from '../service/toast.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'my',
    templateUrl: 'my.page.html',
    styleUrls: ['my.page.scss']
})
export class MyPage implements OnInit {

    favorites$: Observable<Favorites>;

    constructor(private favoritesService: FavoritesService,
                private toastService: ToastService,
                private router: Router) {

    }

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && event.urlAfterRedirects === '/tabs/my') {
                this.load();
            }
        });
    }

    load(): void {
        this.favorites$ = this.favoritesService.queryFavorite();
    }

    remove(id: string) {
        this.favoritesService.delete(id).subscribe(l => {
            this.toastService.presentMidToast('删除成功');
            this.load();
        });

    }
}
