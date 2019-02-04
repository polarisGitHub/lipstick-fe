import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MyPage} from './my.page';
import {DetailPage} from '../common/detail/detail.page';
import {CommonPageModule} from '../common/common.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CommonPageModule,
        RouterModule.forChild([
            {path: '', component: MyPage},
            {path: 'lipstick/detail/:brandCode/:skuCode', component: DetailPage}
        ])
    ],
    declarations: [
        MyPage,
    ]
})
export class MyPageModule {
}
