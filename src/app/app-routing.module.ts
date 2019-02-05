import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'common', loadChildren: './tabs/common/common.module#CommonPageModule' },
  { path: 'detail', loadChildren: './tabs/lipstick-finder/detail/detail.module#DetailPageModule' },
  { path: 'detail', loadChildren: './tabs/my/detail/detail.module#DetailPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
