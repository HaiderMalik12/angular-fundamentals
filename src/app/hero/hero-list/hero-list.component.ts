import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  template: `
    <tr>
    <td [attr.colspan] ="colSpan"> Hello </td>
    </tr>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  title: string;
  colSpan = 2;
  constructor() {
    this.title = 'Hero List'
   }

  ngOnInit() {
  }

}
