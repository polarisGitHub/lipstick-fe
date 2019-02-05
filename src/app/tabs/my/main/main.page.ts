import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Favorites} from '../../../common/data/favorites';
import {FavoritesService} from '../../service/favorites.service';
import {NavigationEnd, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../../common/data/user';
import {AlertService} from '../../service/alert.service';
import {ToastService} from '../../service/toast.service';

@Component({
    selector: 'my',
    templateUrl: 'main.page.html',
    styleUrls: ['main.page.scss']
})
export class MainPage implements OnInit {

    favorites$: Observable<Favorites>;

    user: User = this.userService.getUserInfo();

    constructor(private favoritesService: FavoritesService,
                private router: Router,
                private userService: UserService,
                private toastService: ToastService,
                private alertService: AlertService) {
        this.load();
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

    remove(name: string, id: string) {
        this.alertService.presentAlertConfirm('确认', `是否删除收藏：<strong>${name}</strong>`, [
            {
                text: '不删除',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                }
            }, {
                text: '删除',
                handler: () => {
                    this.favoritesService.delete(id).subscribe(l => {
                        this.toastService.presentMidToast('删除成功');
                        this.load();
                    });
                }
            }
        ]);
    }
}
