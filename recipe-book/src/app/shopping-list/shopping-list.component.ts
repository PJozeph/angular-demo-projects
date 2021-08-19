import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import * as shoppingListAction from "./store/shopping-list.reducer"
import * as shoppingListActions from "./store/shopping-list.actions"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>
  private subscription: Subscription;

  constructor(private slService: ShoppingListService,
              private store: Store<shoppingListAction.AppState>) { 
    }

  ngOnInit() {
    this.ingredients = this.store.select("shoppingListReducer")
    //   this.ingredients = this.slService.getIngredients();
    //   this.subscription = this.slService.ingredientsChanged
    //     .subscribe(
    //       (ingredients: Ingredient[]) => {
    //         this.ingredients = ingredients;
    //       }
    //     );
  }

  onEditItem(index: number) {
    this.store.dispatch(new shoppingListActions.StartEdit(index));
    // this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
