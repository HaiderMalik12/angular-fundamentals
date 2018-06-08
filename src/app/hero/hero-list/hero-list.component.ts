import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <p>{{title}} </p>
  <input (keyup.enter) = "onKeyUp()"/>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Hero List'
   }
   onKeyUp(){
     console.log('Enter pressed')
   }
  ngOnInit() {
  }

}
