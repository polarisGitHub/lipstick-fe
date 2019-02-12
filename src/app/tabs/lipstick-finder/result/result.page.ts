import {Component, OnInit} from '@angular/core';
import {LipstickListItem} from '../../../common/data/lipstick-list-item';
import {LipstickService} from '../../service/lipstick.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingService} from '../../service/loading.service';

@Component({
    selector: 'lipstick-finder-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

    public skus: LipstickListItem[];

    constructor(private lipstickService: LipstickService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private loadingService: LoadingService) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.lipstickService.search(params.get('brands'), params.get('categories'), params.get('color')).subscribe(l => this.skus = l);
        });
    }
}
