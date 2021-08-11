import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private httpClient : HttpClient, private recipeService : RecipeService){}

    save(){
        const recipes = this.recipeService.getRecipes();
        this.httpClient.put(
            'https://recipe-book-project-d2173-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
            recipes)
        .subscribe(response => {
            console.log(response);
        });
    }

    getRecipes() {
        this.httpClient.get<Recipe[]>
        ('https://recipe-book-project-d2173-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
        .pipe(map(recipe => {
            return recipe.map( recipe =>{
                return {...recipe, ingredients : recipe.ingredients ? recipe.ingredients : []}
            })
        }))
        .subscribe(response => {
            this.recipeService.setRecipes(response);
        });
    }
}