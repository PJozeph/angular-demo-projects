

import  * as shoppingListReducers from "../shopping-list/store/shopping-list.reducer";
import * as authReducers from "../auth/store/auth.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
    shoppingList: shoppingListReducers.State;
    auth: authReducers.State
}


export const appReducer: ActionReducerMap<AppState> =  {
    shoppingList : shoppingListReducers.ShoppingListReducer,
    auth: authReducers.authReducer
}
