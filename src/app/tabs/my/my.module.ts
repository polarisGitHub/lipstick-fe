import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MyPage} from './my.page';
import {CommonPageModule} from '../common/common.module';
import {DetailPage} from './detail/detail.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CommonPageModule,
        RouterModule.forChild([
            {path: '', component: MyPage},
            {path: 'detail/:brandCode/:skuCode', component: DetailPage}
        ])
    ],
    declarations: [
        DetailPage,
        MyPage,
    ]
})
export class MyPageModule {
}
