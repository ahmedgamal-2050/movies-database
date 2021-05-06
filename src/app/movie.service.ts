import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieSearch } from './movie/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private url: string = 'http://www.omdbapi.com/?apikey=f9b3d9dc';

  constructor(public http: HttpClient) { }

  getMovieInfo(movieSearch: MovieSearch): Observable<Movie> {
    if (!movieSearch.type && !movieSearch.year) {
      return this.http.get<Movie>(this.url + '&&t=' + movieSearch.name);
    } else if (movieSearch.type && !movieSearch.year) {
      return this.http.get<Movie>(this.url + '&&t=' + movieSearch.name + '&&type=' + movieSearch.type);
    } else if (movieSearch.year && !movieSearch.type) {
      return this.http.get<Movie>(this.url + '&&t=' + movieSearch.name + '&&y=' + movieSearch.year);
    } else {
      return this.http.get<Movie>(this.url + '&&t=' + movieSearch.name + '&&type=' + movieSearch.type + '&&y=' + movieSearch.year);
    }
  }
}
