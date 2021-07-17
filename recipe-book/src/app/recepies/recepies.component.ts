import { Component,  OnInit } from '@angular/core';
import { Recepie as Recipe } from './recepie.model';
import { RecipeService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecipeService]
})
export class RecepiesComponent implements OnInit {

  selectedRecipe : Recipe ;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((selected) => {
      console.log(selected);
      this.selectedRecipe = selected;
    })
  }


}
