import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LipstickItem} from '../../../common/data/lipstick-item';
import {LipstickService} from '../../service/lipstick.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'lipstick-finder-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

    public skus$: Observable<LipstickItem[]>;

    constructor(private lipstickService: LipstickService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.skus$ = this.lipstickService.search(params.get('brands'), params.get('categories'), params.get('color'));
        });
    }

    back(): void {
        this.location.back();
    }
}
