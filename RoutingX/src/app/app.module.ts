import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import {HttpClientModule} from '@angular/common/http';
import { MarvellousService } from './marvellous.service';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    BooksComponent,
    PagenotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [MarvellousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
