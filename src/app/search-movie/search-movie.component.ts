import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from './movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  public movieInfo!: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAnimeNews().subscribe(movie => {
      this.movieInfo = movie;
      console.log("Movie", this.movieInfo);
    });
  }

}
