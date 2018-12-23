import {Component, OnInit} from '@angular/core';
import {LipstickService} from '../service/lipstick.service';
import {Brand} from '../data/brand';
import {Category} from '../data/category';
import {AlertService} from '../service/alert.service';

@Component({
    selector: 'lipstick-finder',
    templateUrl: 'lipstick-finder.page.html',
    styleUrls: [
        'lipstick-finder.page.scss'
    ]
})
export class LipstickFinderPage implements OnInit {

    brands: Brand[];

    categories: Category[];

    constructor(private lipstickService: LipstickService,
                private alertService: AlertService) {

    }

    ngOnInit(): void {
        this.lipstickService.getBrands().subscribe(l => {
            this.brands = l;
            this.loadCategories([this.brands[0].code]);
        });
    }

    loadCategories(brands: string[]) {
        // this.categories = [];
        this.lipstickService.getCategories(brands).subscribe(l => this.categories = l);
    }

    search(param: SearchParam): void {
        if (param.brand.length === 0 || param.category.length === 0 || param.color.length === 0) {
            this.alertService.presentAlert({
                header: '错误',
                message: '【品牌，类别，色号】必填',
                buttons: ['确认']
            });
            return;
        }
        // TODO rest
    }
}

class SearchParam {
    brand: string;
    category: string;
    color: string;
}
