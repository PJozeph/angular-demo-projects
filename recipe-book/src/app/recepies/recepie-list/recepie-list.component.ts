import { Component, OnInit } from '@angular/core';
import { Recepie as Recipe } from '../recepie.model';
import { RecipeService } from '../recepie.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
