import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    public ingredientsChanges = new EventEmitter<Ingredient[]>(); 

    private ingredients: Ingredient[] = [
        new Ingredient("Salt", 1),
        new Ingredient("Apple", 4),
        new Ingredient("Tomato", 10),
    ]

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanges.emit(this.ingredients.slice())
    }

}