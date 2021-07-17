import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recepie as Recipe } from "./recepie.model";

export class RecipeService {

    public selectedRecipe = new EventEmitter<Recipe>();

    private recipes : Recipe [] = [
        new Recipe(
            0, 
            'testRecepie', 
            'this is a test', 
            'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg',
            [
                new Ingredient("Salat", 2),
                new Ingredient("Tomato", 12),
                new Ingredient("Fries", 20),
            ]),
        new Recipe(
            1,
            'testRecepie2', 
            'this is a test', 
            'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg',
            [
                new Ingredient("Fries", 2),
                new Ingredient("Potato", 12),
                new Ingredient("Salt", 22),
            ]),
      ]
    
    getRecipes() {
        return this.recipes.slice();
    }

}