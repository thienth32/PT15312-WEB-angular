import { Component, OnInit } from '@angular/core';
import {HEROES} from '../../mock-data/HEROES';
import {Hero} from '../../models/Hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }
  heroes:Array<Hero> = HEROES;
  ngOnInit(): void {
    
  }

  removeHero(hero:any){
    this.heroes = this.heroes.filter((x: any) => x.id!=hero);
  }

  submitForm(event: any){
    event.preventDefault();
    let formData = new FormData(event.target);
    // console.log(formData.get('id'), formData.get('name'));
    // event.target.reset();
  }
}
