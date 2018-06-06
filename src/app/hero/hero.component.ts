import {Component } from '@angular/core';

@Component({
  selector : 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
title = 'My Hero Component';
hero = { name: 'Jane Doe', salary: 5000.34, joinDate: new Date()};
heroes = [{id: 1, name: 'Jane'}, {id: 2, name: 'SMith'}];
currentStyles = {'font-weight': 'bold'}
}
