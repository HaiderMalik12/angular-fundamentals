import { Component } from '@angular/core';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Fundamentals';
  constructor(private heroService: HeroService){
  }
}
