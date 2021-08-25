import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movie/movies-page/movies-page.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './movie/store/index';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffect } from './movie/store/movie.effect';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MovieEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
