import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie as Recipe } from '../../recepie.model';
import { RecipeService } from '../../recepie.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepie : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.selectedRecipe.emit(this.recepie);
  }

}
