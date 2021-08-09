import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static : false}) form : NgForm;
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  subscription: Subscription;

  editMode: boolean = false;
  selectedItemIndex: number;
  selectedIngredient : Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.editIngredient.subscribe(
      (id: number) => {
        this.editMode = true;
        this.selectedItemIndex = id;
        this.selectedIngredient = this.slService.getIngredient(id);
        this.form.setValue({
          name : this.selectedIngredient.name,
          amount : this.selectedIngredient.amount
        })
      }
    )
  }

  onAddItem(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if(this.editMode) {
      this.slService.updateIngredient(this.selectedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.form.reset();
  }

  clear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete(){
    console.log(this.selectedItemIndex)
    this.slService.removeIngredient(this.selectedItemIndex)
    this.clear();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
