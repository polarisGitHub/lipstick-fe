import {Component, OnInit} from '@angular/core';
import {LipstickService} from '../service/lipstick.service';
import {Brand} from '../data/brand';
import {Category} from '../data/category';

@Component({
    selector: 'lipstick-finder',
    templateUrl: 'lipstick-finder.page.html',
    styleUrls: [
        'lipstick-finder.page.scss',
        '../tabs.page.scss'
    ]
})
export class LipstickFinderPage implements OnInit {

    brands: Brand[];

    categories: Category[];

    constructor(
        private lipstickService: LipstickService,
    ) {

    }

    ngOnInit(): void {
        this.lipstickService.getBrands().subscribe(l => this.brands = l);
    }

    search(): void {
    }

    brandsChange(brands: string) {

    }
}
