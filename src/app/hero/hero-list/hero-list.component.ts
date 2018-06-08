import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <p>{{title}} </p>
  <p> <input [(ngModel)] ="name"/> </p>
  <button class="btn btn-primary" (click) ="onSave()">Save </button>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title: string;
  name = 'Kevin'
  constructor() {
    this.title = 'Hero List'
   }
   onSave(name){
     console.log(this.name)
   }
  ngOnInit() {
  }

}
