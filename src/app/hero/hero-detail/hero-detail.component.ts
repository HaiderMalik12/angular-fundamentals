import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input('myHero')
  hero: Hero
  @Output()
  change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteHero(){
    this.change.emit(this.hero);
  }

}
