import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LipstickService} from '../../service/lipstick.service';

@Component({
    selector: 'app-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

    private params: object;

    constructor(private lipstickService: LipstickService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.params = params;
            // this.lipstickService.search(params['brands'], params['category'], params['color']);
        });
    }

}
