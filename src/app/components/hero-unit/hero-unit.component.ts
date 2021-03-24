import { Component, OnInit, 
          Input } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'hero-unit',
  templateUrl: './hero-unit.component.html',
  styleUrls: ['./hero-unit.component.css']
})
export class HeroUnitComponent implements OnInit {
  @Input("hero-data") heroData: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
