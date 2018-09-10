import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/Service/Hero/hero.service';
import { Hero } from 'src/app/Models/Hero/Hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];
  selectedHero: Hero = {
    id:1,
    name:"李腾",
    desc:"无敌无敌无敌"
  }
  ngOnInit(): void {
    this.heroService.getHeroes().
      subscribe(heroes => {
        this.heroes = heroes.slice(0,5);
      })
    // this.heroes = this.heroService.getHeroes()
  }

  selectHero(hero: Hero): void {
     this.selectedHero = hero;
  }

  title = '英雄列表'


}
