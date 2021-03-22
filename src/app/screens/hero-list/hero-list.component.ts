import { Component, OnInit } from '@angular/core';
import {HEROES} from '../../mock-data/HEROES';
import {SKILLS} from '../../mock-data/SKILLS';
import {Hero} from '../../models/Hero';
import {Skill} from '../../models/Skill';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { textSpanIntersectsWithTextSpan } from 'typescript';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  /**
   * tạo ra kiểu dữ liệu & hiển thị danh sách monster
   * lớp monster có các thuộc tính:
   * id, name, image, detail, spells
   * spells là dạng mảng của lớp Spell
   * lớp Spell có các thuộc tính:
   * id, name, icon
   */

  constructor(private modalService: NgbModal) { }
  heroes:Array<Hero> = HEROES;
  templateSkills:Array<Skill> = SKILLS;
  selectedSkills: Array<Skill> = [];
  formObject: Hero = {
    id: 0,
    name: "",
    img: "",
    skills: []
  }
  ngOnInit(): void {
    
  }

  addSkill(checkedSkill: Skill){
    let index = this.selectedSkills.indexOf(checkedSkill);
    if(index == -1){
      this.selectedSkills.push(checkedSkill);
    }else{
      this.selectedSkills = this.selectedSkills.filter(item => item != checkedSkill)
    }
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

  updateHero(hero: Hero){
    let updateHero = {...hero};
    this.formObject = updateHero;
  }
}
