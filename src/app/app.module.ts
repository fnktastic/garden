import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { CORE_STATES, NGXS_CONFIGS } from './core/ngxs.index';
import { MainViewComponent } from './main-view/main-view.component';
import { SetGardenComponent } from './set-garden/set-garden.component';
import { FormsModule } from '@angular/forms';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { PlantsListComponent } from './plants-list/plants-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SetGardenComponent,
    AddPlantComponent,
    PlantsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot(CORE_STATES, NGXS_CONFIGS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
