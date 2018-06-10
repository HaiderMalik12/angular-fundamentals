import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <h3>Hero List </h3>
  <li *ngFor = "let hero of heroes" > {{hero.name}}</li>
  <br>
  <app-hero-detail [myHero] = "myHero" (myChange) = "onDeleteHandler($event)"> </app-hero-detail>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title: string;
  heroes: Hero[] = [{
    id: 1,
    rating: 3.45230,
    name : 'Jane',
    salary: 23234.9,
    joinDate: new Date()
  },
  {
    id: 2,
    rating: 4.45230,
    name : 'Doe',
    salary: 53234.9,
    joinDate: new Date()
  }]
  myHero: Hero;
  constructor() {
    this.title = 'Hero List'
    this.myHero = this.heroes[0];
   }
  ngOnInit() {
  }
  onDeleteHandler(hero: Hero){
    const index = this.heroes.findIndex(item => item.id === hero.id );
    this.heroes.splice(index, 1);
  }

}
