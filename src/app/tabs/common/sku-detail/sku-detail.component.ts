import {Component, Input, OnInit} from '@angular/core';
import {LipstickDetailItem} from '../../../common/data/lipstick-detail-item';

@Component({
    selector: 'sku-detail',
    templateUrl: './sku-detail.component.html',
    styleUrls: ['./sku-detail.component.scss'],
})
export class SkuDetailComponent implements OnInit {


    @Input() sku: LipstickDetailItem;

    constructor() {
    }

    ngOnInit() {

    }
}
