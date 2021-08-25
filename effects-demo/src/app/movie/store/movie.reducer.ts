import { MovieActions } from "./movie.action";
import * as movieActions from "./movie.action"
import { Movie } from "../movie.model";
import { Actions } from "@ngrx/effects";

export interface MovieState {
    movies: Movie[];
    hasError: boolean;
}

const initialState: MovieState = {
    movies: [],
    hasError : false
}

export function movieReducer(state = initialState, action: MovieActions) {
    switch (action.type) {
        case movieActions.FETCH_START:
            return {
                ...state,
            }
         case movieActions.FETCH_SUCCESS : 
            return {
                ...state,
                movies : [...action.payload]
            }
          case movieActions.FETCH_FAIL : 
                return {
                    ...state,
                    errorMessage: action.payload
                }  
        default: return state;
    }
}