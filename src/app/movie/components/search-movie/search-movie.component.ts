import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieSearch } from '../../movie';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  public searchMovieForm!: FormGroup;

  @Output() public search = new EventEmitter<MovieSearch>();

  constructor(private fb: FormBuilder, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.searchMovieForm = this.fb.group({
      name: ['', Validators.required],
      type: [null],
      year: ['']
    });
  }

  searchMovie() {
    if (this.searchMovieForm.dirty && this.searchMovieForm.valid) {
      this.search.emit(this.searchMovieForm.value);
      this.searchMovieForm.reset();
      this.ref.detectChanges();
    } else {
      this.name;
    }
  }

  get name() {
    return this.searchMovieForm.get('name');
  }
}
