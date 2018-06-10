import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <p> {{hero.name | uppercase}} </p>
  <p> {{hero.salary | currency}} </p>
  <p> {{hero.rating | number}} </p>
  <p> {{hero.joinDate | date:'shortDate'}} </p>

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
  hero: Hero;
  constructor() {
    this.title = 'Hero List'
    this.hero = this.heroes[0];
   }
  ngOnInit() {
  }

}
