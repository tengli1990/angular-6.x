import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/Models/Hero/Hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() hero: Hero;
  title = "英雄介绍";

}
