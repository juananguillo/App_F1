import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';


const appRoutes: Routes =[
  {path: '', component: RankingComponent, pathMatch: 'full'},
  {path: 'ranking', component: RankingComponent},
  {path: 'ranking/:id', component: RankingComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
