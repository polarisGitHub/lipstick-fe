import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LipstickService} from '../../service/lipstick.service';
import {LipstickItem} from '../../../common/data/lipstick-item';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

    private params: object;

    private lipstick$: Observable<LipstickItem>;

    constructor(private lipstickService: LipstickService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.params = params;
            this.lipstick$ = this.lipstickService.search(params['brands'], params['category'], params['color']);
        });
    }

    back(): void {
        this.router.navigate(['/tabs/lipstick-finder']);
    }
}
