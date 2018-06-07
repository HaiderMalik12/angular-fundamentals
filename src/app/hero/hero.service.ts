import { Injectable } from "@angular/core";
import { Logger } from "../logger.service";

@Injectable()
export class HeroService{
  heroes = [{id: 1, name : 'Jane'}, {id: 2, name: 'Doe'},{id: 3, name: 'Kevin'}];
  constructor(private logger: Logger){}
  getHeroes(){
    this.logger.log('get Heroes fetched');
    return this.heroes;
  }
}
