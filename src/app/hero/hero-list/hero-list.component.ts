import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <p>{{title}} </p>
  <button [style.color] = "isActive ? 'blue' : 'red' "> Submit </button>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title: string;
  isActive = false;
  constructor() {
    this.title = 'Hero List'
   }

  ngOnInit() {
  }

}
