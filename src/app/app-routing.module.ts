import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoosterComponent } from './core/booster/booster.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booster/:code', component: BoosterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
