import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { QuestionbComponent } from './questionb/questionb.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuescComponent } from './quesc/quesc.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    QuestionbComponent,
    QuescComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
