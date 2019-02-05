import {Component, Input, OnInit} from '@angular/core';
import {LipstickListItem} from '../../../common/data/lipstick-list-item';

@Component({
    selector: 'sku-detail',
    templateUrl: './sku-detail.component.html',
    styleUrls: ['./sku-detail.component.scss'],
})
export class SkuDetailComponent implements OnInit {


    @Input() sku: LipstickListItem;

    constructor() {
    }

    ngOnInit() {

    }
}
