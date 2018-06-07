import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  template: `
    <div>
       <h1>{{title}} </h1>
       <h3>{{myHero}} </h3>
    </div>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  title: string;
  myHero : string;
  constructor() {
    this.myHero = 'Jane';
    this.title = 'Hero List'
   }

  ngOnInit() {
  }

}
