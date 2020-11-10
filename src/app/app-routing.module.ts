import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuescComponent } from './quesc/quesc.component';
import { QuestionbComponent } from './questionb/questionb.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'questiona',component:HomeComponent},
  {path:'questionb',component:QuestionbComponent},
  {path:'questionc',component:QuescComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
