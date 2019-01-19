import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LipstickService} from '../../service/lipstick.service';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {LipstickListItem} from '../../../common/data/lipstick-list-item';

@Component({
    selector: 'lipstick-finder-result',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    public sku$: Observable<LipstickListItem>;

    constructor(private lipstickService: LipstickService,
                private activatedRoute: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.sku$ = this.lipstickService.getBySkuCode(params.get('skuCode'));
        });
    }

    back(): void {
        this.location.back();
    }
}
