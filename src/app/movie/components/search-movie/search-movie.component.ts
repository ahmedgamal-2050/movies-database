import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Movie } from '../../movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  public searchMovieForm!: FormGroup;

  @Output() public search = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.searchMovieForm = this.fb.group({
      movieName: ['']
    });
  }

  searchMovie() {
    if (this.searchMovieForm.dirty && this.searchMovieForm.valid) {
      this.search.emit(this.searchMovieForm.value.movieName);
      this.searchMovieForm.reset();
      this.ref.detectChanges();
    }
  }
}
