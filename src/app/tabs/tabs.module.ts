import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {MyPageModule} from './my/my.module';
import {ColorFinderPageModule} from './color-finder/color-finder.module';
import {LipstickFinderPageModule} from './lipstick-finder/lipstick-finder.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        LipstickFinderPageModule,
        ColorFinderPageModule,
        MyPageModule,
    ],
    declarations: [
        TabsPage,
    ]
})
export class TabsPageModule {
}
