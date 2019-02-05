import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ToastService} from '../../service/toast.service';
import {FavoritesService} from '../../service/favorites.service';
import {LipstickService} from '../../service/lipstick.service';
import {ActivatedRoute} from '@angular/router';
import {LipstickListItem} from '../../../common/data/lipstick-list-item';

@Component({
    selector: 'lipstick-finder-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    public sku$: Observable<LipstickListItem>;

    constructor(
        private favoritesService: FavoritesService,
        private toastService: ToastService,
        private lipstickService: LipstickService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.sku$ = this.lipstickService.getBySkuCode(params.get('brandCode'), params.get('skuCode'));
        });
    }


    saveFavorites(brandCode: string, skuCode: string): void {
        const result: Observable<string> = this.favoritesService.saveFavorite(brandCode, skuCode);
        result.subscribe(l => {
            if (l) {
                this.toastService.presentMidToast('保存成功');
            }
        });
    }

}
