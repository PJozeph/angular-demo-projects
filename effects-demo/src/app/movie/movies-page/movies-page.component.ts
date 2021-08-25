import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { Store } from "@ngrx/store"
import { Observable } from 'rxjs';
import { AppState } from '../store';
import * as movieActions from "../store/movie.action"

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  movies: Observable<Movie[]> = this.store.select(state => state.movie.movies);
  hasError : Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new movieActions.LoadMoviesStart())
    this.hasError = this.store.select(state => state.movie.hasError);
  }

}
