import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-qt-edit-danh-muc',
  templateUrl: './qt-edit-danh-muc.component.html',
  styleUrls: ['./qt-edit-danh-muc.component.css']
})
export class QtEditDanhMucComponent implements OnInit {
  cateId!: string;
  editForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private cateService: CategoryService
  ) {
    this.editForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  async ngOnInit(){
    await this.route.params.subscribe(params => {
      this.cateId = params.id;
    })
    await this.cateService.findById(this.cateId).subscribe(data => {
      this.editForm.setValue({
        id: data.id,
        name: data.name
      })
    })
  }

  get f(){
    return this.editForm.controls;
  }

}
