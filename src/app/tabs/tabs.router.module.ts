import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { LipstickFinderPage } from './lipstick-finder/lipstick-finder.page';
import { ColorFinderPage } from './color-finder/color-finder.page';
import { MyPage } from './my/my.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(o-lipstick-finder:lipstick-finder)',
        pathMatch: 'full',
      },
      {
        path: 'lipstick-finder',
        outlet: 'o-lipstick-finder',
        component: LipstickFinderPage
      },
      {
        path: 'color-finder',
        outlet: 'o-color-finder',
        component: ColorFinderPage
      },
      {
        path: 'my',
        outlet: 'o-my',
        component: MyPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(o-lipstick-finder:lipstick-finder)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
