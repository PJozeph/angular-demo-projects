import { ActionReducerMap } from "@ngrx/store";
import { movieReducer, MovieState } from "./movie.reducer";

export interface AppState {
    movie: MovieState   
}

export const reducers: ActionReducerMap<AppState, any> = {
    movie : movieReducer
}