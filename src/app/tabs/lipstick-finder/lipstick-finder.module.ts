import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SearchPage} from './search/search.page';
import {ResultPage} from './result/result.page';
import {CommonPageModule} from '../common/common.module';
import {DetailPage} from './detail/detail.page';

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
        DetailPage,
        SearchPage,
        ResultPage,
    ]
})
export class LipstickFinderPageModule {
}
