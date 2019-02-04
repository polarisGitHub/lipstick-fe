import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DetailPage} from '../common/detail/detail.page';
import {SearchPage} from './search/search.page';
import {ResultPage} from './result/result.page';
import {CommonPageModule} from '../common/common.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommonPageModule,
        RouterModule.forChild([
            {path: '', component: SearchPage},
            {path: 'search', component: ResultPage},
            {path: 'detail/:brandCode/:skuCode', component: DetailPage}
        ])
    ],
    declarations: [
        SearchPage,
        ResultPage,
    ]
})
export class LipstickFinderPageModule {
}
