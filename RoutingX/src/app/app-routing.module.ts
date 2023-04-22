import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

const routes: Routes = [

  {path : 'books',component : BooksComponent},
  {path : 'demo',component : TechnologyComponent},
  {path : '',component : TechnologyComponent}, // Default Route
  {path : '**',component : PagenotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
