import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
  <p>{{title}} </p>
  <input #name  (keyup.enter) = "onKeyUp(name.value)"/>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Hero List'
   }
   onKeyUp(name){
     console.log('Enter pressed', name)
   }
  ngOnInit() {
  }

}
