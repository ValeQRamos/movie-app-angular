import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MoviesModule } from './movies-module/movies.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MoviesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
