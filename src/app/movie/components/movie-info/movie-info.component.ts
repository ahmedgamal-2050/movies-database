import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  @Input() public movieInfo!: Movie;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movieInfo && changes.movieInfo.currentValue) {
      this.movieInfo = changes.movieInfo.currentValue as Movie;
    }
  }

  ngOnInit(): void {
  }
}
