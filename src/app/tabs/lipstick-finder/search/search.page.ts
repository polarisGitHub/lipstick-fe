import {Component, OnInit} from '@angular/core';
import {LipstickService} from '../../service/lipstick.service';
import {Brand} from '../../../common/data/brand';
import {Category} from '../../../common/data/category';
import {AlertService} from '../../service/alert.service';
import {Router} from '@angular/router';

@Component({
    selector: 'lipstick-finder-search',
    templateUrl: 'search.page.html',
    styleUrls: [
        'search.page.scss'
    ]
})
export class SearchPage implements OnInit {

    brands: Brand[];

    categories: Category[];

    constructor(private lipstickService: LipstickService,
                private alertService: AlertService,
                private router: Router) {
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
        // TODO 相对路径
        this.router.navigate(['/tabs/lipstick-finder/result', {
            brand: param.brand,
            category: param.category,
            color: param.color
        }]);

    }
}

class SearchParam {
    brand: string;
    category: string;
    color: string;
}
