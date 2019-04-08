import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieStripComponent } from './movie-strip/movie-strip.component';
import { MoviesDbService } from './movies-db.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieStripComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ MoviesDbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
