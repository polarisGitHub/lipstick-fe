import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ResultPage} from './result/result.page';
import {SearchPage} from './search/search.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {path: '', component: SearchPage},
            {path: 'result', component: ResultPage}
        ])
    ],
    declarations: [
        SearchPage,
        ResultPage
    ]
})
export class LipstickFinderPageModule {
}
