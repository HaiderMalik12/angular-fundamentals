import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
    <div>
       <h1>{{title}} </h1>
       <h3>{{myHero.name}} </h3>
       <ul>
        <li *ngFor="let hero of heroes">{{hero.name}} </li>
       </ul>
       <p *ngIf="heroes.length > 3"> There are more heros </p>
    </div>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  title: string;
  myHero : Hero
  heroes = [
   new Hero(1, 'Jane'),
   new Hero(2, 'Doe'),
   new Hero(3, 'Kevin'),
   new Hero(4, 'Lane'),
  ]
  constructor() {
    this.myHero = this.heroes[0]
    this.title = 'Hero List'
   }

  ngOnInit() {
  }

}
