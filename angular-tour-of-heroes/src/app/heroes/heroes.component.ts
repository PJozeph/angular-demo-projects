import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero [] =  []

  constructor(private heroService : HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe(
      heroes => this.heroes = heroes
    );
  }
}
