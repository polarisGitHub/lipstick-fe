import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LipstickListItem} from '../../../common/data/lipstick-list-item';
import {LipstickService} from '../../service/lipstick.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'my-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    public sku$: Observable<LipstickListItem>;

    constructor(
        private lipstickService: LipstickService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.sku$ = this.lipstickService.getBySkuCode(params.get('brandCode'), params.get('skuCode'));
        });
    }

}
