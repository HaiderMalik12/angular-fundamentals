import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <p>{{title}} </p>
  <button class ="btn btn-primary" (click) ="onSubmit($event)"> Submit </button>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Hero List'
   }
   onSubmit($event){
     console.log('Submitted ', $event)
   }

  ngOnInit() {
  }

}
