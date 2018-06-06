import {Component } from '@angular/core';

@Component({
  selector : 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
title = 'My Hero Component';
hero = { name: 'Jane Doe'};
imgUrl = "https://angular.io/generated/images/guide/architecture/parent-child-binding.png";

onClickHandler(hero){
  console.log(hero);
  alert(hero.name);
}

}
