import { Component } from '@angular/core';
import { Recepie } from './recepies/recepie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recepie-book';

  loadedFeautre = 'recepies';
  selectedRecepie;

  onNavigate(feature : string) {
    this.loadedFeautre = feature;
  }


}
