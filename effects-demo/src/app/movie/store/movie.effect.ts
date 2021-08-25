import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MovieService } from '../movei.service';
import * as movieActions from './movie.action';

@Injectable()
export class MovieEffect {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(movieActions.FETCH_START),
        mergeMap(() => this.movieService.getAll()
            .pipe(
                map(movies => ({ type: movieActions.FETCH_SUCCESS, payload: movies })),
                catchError(() => of({ type: movieActions.FETCH_FAIL}))
        )))
    );

    constructor(private actions$: Actions, 
                private movieService: MovieService) { }
}