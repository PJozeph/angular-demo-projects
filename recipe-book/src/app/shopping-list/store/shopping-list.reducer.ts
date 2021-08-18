
import { Ingredient } from "src/app/shared/ingredient.model";
import * as Actions from "./shopping-list.actions";
const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
}
export function ShoppingListReducer(state = initialState, action: Actions.AddIngredient) {
    switch (action.type) {
        case Actions.ADD_INGREDIENT :
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };

        default: 
            return state;
    }
}