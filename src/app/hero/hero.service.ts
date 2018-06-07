export class HeroService{
  heroes = [{id: 1, name : 'Jane'}, {id: 2, name: 'Doe'}];
  getHeroes(){
    return this.heroes;
  }
}
