import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieComponent } from './container/movie.component';

const movieRoutes: Routes = [
  { path: '', component: MovieComponent }
];

@NgModule({
  declarations: [
    MovieComponent,
    SearchMovieComponent,
    MovieInfoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(movieRoutes),
    CommonModule
  ],
})

export class MovieModule {}
