import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie, MovieSearch } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movieInfo!: Movie;

  constructor(private movieService: MovieService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  searchMovie(movieSearch: MovieSearch) {
    this.movieService.getMovieInfo(movieSearch).subscribe(movie => {
      this.movieInfo = movie;
      this.ref.detectChanges();
    });
  }

}
