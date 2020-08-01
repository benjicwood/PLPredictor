import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PremierLeagueComponent } from './premier-league/premier-league.component';


const routes: Routes = [

  { path: '', component: PremierLeagueComponent },
  { path: 'PL', component: PremierLeagueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
