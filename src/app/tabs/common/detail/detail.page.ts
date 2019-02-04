import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LipstickService} from '../../service/lipstick.service';
import {Observable} from 'rxjs';
import {LipstickListItem} from '../../../common/data/lipstick-list-item';
import {FavoritesService} from '../../service/favorites.service';
import {ToastService} from '../../service/toast.service';

@Component({
    selector: 'lipstick-finder-result',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    public sku$: Observable<LipstickListItem>;

    constructor(private lipstickService: LipstickService,
                private activatedRoute: ActivatedRoute,
                private favoritesService: FavoritesService,
                private toastService: ToastService) {
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
