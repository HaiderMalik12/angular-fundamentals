import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <p>{{title}} </p>
  <button class="btn" [class.btn-primary] = "isPrimary"> Submit </button>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title: string;
  isPrimary = true;
  constructor() {
    this.title = 'Hero List'
   }

  ngOnInit() {
  }

}
