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
  detail: string = "<a href='http://google.com'>Link to google</a>";
  
  ngOnInit(): void {
    
  }

  removeHero(hero:Hero){
    this.heroes = this.heroes.filter((x: Hero) => x != hero);
  }

  submitForm(event: any){
    event.preventDefault();
    let formData = new FormData(event.target);
    let newHero: Hero = {
      id: Number(formData.get('id')),
      name: `${formData.get('name')}`,
      img: `${formData.get('image')}`
    }
    this.heroes.push(newHero);
    // console.log(formData.get('id'), formData.get('name'));
    event.target.reset();
  }
}
