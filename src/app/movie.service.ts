import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private url: string = 'http://www.omdbapi.com/?apikey=f9b3d9dc';

  constructor(public http: HttpClient) { }

  getMovieInfo(movieName: string): Observable<Movie> {
    return this.http.get<Movie>(this.url + '&&t=' + movieName);
  }
}
