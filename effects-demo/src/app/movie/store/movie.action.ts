import { Action } from "@ngrx/store";
import { Movie } from "../movie.model";


export const FETCH_START = '[Movie Page] Fetch Start';
export const FETCH_SUCCESS = '[Movie Page] Fetch Success';
export const FETCH_FAIL = "[Movie Page] Fetch Fail"

export class LoadMoviesStart implements Action {
    readonly type = FETCH_START;
}

export class LoadMovieSuccess implements Action {
    readonly type = FETCH_SUCCESS;

    constructor(public payload : Movie[]) {}
}

export class FetchMoviesFails implements Action {
       readonly type = FETCH_FAIL;
       
       constructor(public payload : boolean) {}
}

export type MovieActions = LoadMoviesStart 
                          | LoadMovieSuccess
                          | FetchMoviesFails;