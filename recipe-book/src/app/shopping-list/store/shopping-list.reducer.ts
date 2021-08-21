
import { Ingredient } from "src/app/shared/ingredient.model";
import * as Actions from "./shopping-list.actions";

export interface State {
    ingredients : Ingredient [],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}
const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient : null,
    editedIngredientIndex: -1
}
export function ShoppingListReducer(state = initialState, action: Actions.ShoppingListActions) {
    switch (action.type) {
        case Actions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case Actions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case Actions.DELETE_INGREDIENT: {
            const ingredients = state.ingredients.filter((ingredients, index) =>{ 
                return index !== state.editedIngredientIndex
            })
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient : null,
                editedIngredientIndex: -1
            }
        }
        case Actions.EDIT_INGREDIENT: {
                const ingredients = [...state.ingredients];
                ingredients[state.editedIngredientIndex] = { ...ingredients[state.editedIngredientIndex], ...action.payload}
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient : null,
                editedIngredientIndex: -1
            }
        }
        case Actions.START_EDIT : {
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient : {...state.ingredients[action.payload]}             
            }
        }
        case Actions.STOP_EDIT : {
            return {
                ...state,
                editedIngredientIndex: null,
                editedIngredient: -1,
            }
        }
        default:
            return state;
    }
}