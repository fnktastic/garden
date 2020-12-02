import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetGardenComponent } from './set-garden/set-garden.component';
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: MainViewComponent },
  { path: 'set-garden', component: SetGardenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
