import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MainPage} from './main/main.page';
import {CommonPageModule} from '../common/common.module';
import {DetailPage} from './detail/detail.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CommonPageModule,
        RouterModule.forChild([
            {path: '', component: MainPage},
            {path: 'detail/:brandCode/:skuCode', component: DetailPage}
        ])
    ],
    declarations: [
        DetailPage,
        MainPage,
    ]
})
export class MyPageModule {
}
