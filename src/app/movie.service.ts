import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './search-movie/movie';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private url: string = 'http://www.omdbapi.com/?apikey=f9b3d9dc&&t=The+Avengers';

  constructor(public http: HttpClient) { }

  getAnimeNews(): Observable<Movie> {
    return this.http.get<Movie>(this.url);
  }
}
