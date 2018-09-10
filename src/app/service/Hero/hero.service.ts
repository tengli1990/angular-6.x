import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../Models/Hero/Hero';
import { HEROES } from '../../Mock/mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES)
  }
}
