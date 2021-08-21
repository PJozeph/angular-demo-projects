import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = "[Shopping list] Add Ingredient";
export const ADD_INGREDIENTS = "[Shopping list] Add Ingredients";
export const DELETE_INGREDIENT = "[Shopping list] Delete Ingredient"
export const EDIT_INGREDIENT = "[Shopping list] Edit Ingredient"

export const START_EDIT = "[Shopping list] Start Edit";
export const STOP_EDIT = "[Shopping list] Stop Edit";

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;

    constructor(public payload : Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;

    constructor(public payload : Ingredient []) {}
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;

    constructor() {};
}

export class EditIngredient implements Action {
    readonly type = EDIT_INGREDIENT;
    
    constructor(public payload : Ingredient) {}
}

export class StartEdit implements Action {
    readonly type = START_EDIT;

    constructor(public payload: number) {}
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}

export type ShoppingListActions = AddIngredient 
                                | AddIngredients 
                                | DeleteIngredient 
                                | EditIngredient
                                | StartEdit
                                | StopEdit;