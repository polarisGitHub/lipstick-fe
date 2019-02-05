import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {SkuDetailComponent} from './sku-detail/sku-detail.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [
        SkuDetailComponent
    ],
    exports: [
        SkuDetailComponent
    ]
})
export class CommonPageModule {
}
