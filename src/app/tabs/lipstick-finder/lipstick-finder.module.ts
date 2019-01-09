import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DetailPage} from './detail/detail.page';
import {SearchPage} from './search/search.page';
import {ResultPage} from './result/result.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {path: '', component: SearchPage},
            {path: 'search', component: ResultPage},
            {path: 'detail', component: DetailPage}
        ])
    ],
    declarations: [
        SearchPage,
        ResultPage,
        DetailPage
    ]
})
export class LipstickFinderPageModule {
}
