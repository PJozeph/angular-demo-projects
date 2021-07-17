import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  @Input() selectedRecipe : Recepie; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  sendIngredients(recipe : Recepie) {
    console.log("sending elemnts")
    recipe.ingredinets.forEach(ingredient => this.shoppingListService.addIngredient(ingredient));
  }

}
