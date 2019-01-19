import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LipstickListItem} from '../../../common/data/lipstick-list-item';
import {LipstickService} from '../../service/lipstick.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'lipstick-finder-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

    public skus$: Observable<LipstickListItem[]>;

    constructor(private lipstickService: LipstickService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.skus$ = this.lipstickService.search(params.get('brands'), params.get('categories'), params.get('color'));
        });
    }
}
