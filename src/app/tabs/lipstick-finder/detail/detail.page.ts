import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LipstickService} from '../../service/lipstick.service';
import {LipstickItem} from '../../../common/data/lipstick-item';
import {Observable} from 'rxjs';

@Component({
    selector: 'lipstick-finder-result',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    constructor(private lipstickService: LipstickService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
    }

    back(): void {
        this.router.navigate(['/tabs/lipstick-finder']);
    }
}
