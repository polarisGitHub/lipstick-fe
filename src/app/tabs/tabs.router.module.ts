import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'lipstick-finder',
                children: [
                    {
                        path: '',
                        loadChildren: './lipstick-finder/lipstick-finder.module#LipstickFinderPageModule'
                    }
                ]
            },
            {
                path: 'color-finder',
                children: [
                    {
                        path: '',
                        loadChildren: './color-finder/color-finder.module#ColorFinderPageModule'
                    }
                ]
            },
            {
                path: 'my',
                children: [
                    {
                        path: '',
                        loadChildren: './my/my.module#MyPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/lipstick-finder',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/lipstick-finder',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
