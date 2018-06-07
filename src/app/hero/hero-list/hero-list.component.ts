import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
    <div>
    <p> Helooasdasd {{title}}

    asdjlhasdj

    {{title}}

    akjsdkjasdh

    {{title}}
    </p>
      <img src= "{{imageUrl}}"/>
      <img [src] = "imageUrl"/>
    </div>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  title: string;
  imageUrl:string;
  constructor() {
    this.title = 'Hero List'
    this.imageUrl = 'http://lorempixel.com/400/200'
   }

  ngOnInit() {
  }

}
