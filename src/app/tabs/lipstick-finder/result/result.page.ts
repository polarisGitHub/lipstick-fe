import {Component, OnInit, ViewChild} from '@angular/core';
import {LipstickListItem} from '../../../common/data/lipstick-list-item';
import {LipstickService} from '../../service/lipstick.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingService} from '../../service/loading.service';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
    selector: 'lipstick-finder-result',
    templateUrl: './result.page.html',
    styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

    public skus: LipstickListItem[];

    private brands: string;

    private categories: string;

    private color: string;

    private nextId: string;

    private;
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    constructor(private lipstickService: LipstickService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private loadingService: LoadingService) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.skus = [];
            [this.brands, this.categories, this.color] = [params.get('brands'), params.get('categories'), params.get('color')];
            this.lipstickService.search(this.brands, this.categories, this.color, null).subscribe(l => {
                this.skus = l.data;
                this.nextId = l.nextId;
            });
        });
    }

    identify(index: number, item: LipstickListItem) {
        return item.id;
    }

    loadMoreSearchData(event) {
        this.lipstickService.search(this.brands, this.categories, this.color, this.nextId).subscribe(l => {
            this.skus = this.skus.concat(l.data);
            this.nextId = l.nextId;
            event.target.complete();
            if (!this.nextId) {
                this.infiniteScroll.disabled = true;
            }
        });
    }
}
