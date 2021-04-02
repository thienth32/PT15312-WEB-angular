import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-qt-new-danh-muc',
  templateUrl: './qt-new-danh-muc.component.html',
  styleUrls: ['./qt-new-danh-muc.component.css']
})
export class QtNewDanhMucComponent implements OnInit {

  constructor(private categoryService: CategoryService,
            private router: Router) { }
  danhmucForm: FormGroup = new FormGroup({
    name : new FormControl(),
  });
  

  ngOnInit(): void {
  }

  onSubmit(){
    this.categoryService.addNewCategory(this.danhmucForm.value).subscribe(data => {
      if(data != undefined){
        this.router.navigate(['/admin/danh-muc']);
      }
    })
  }

}
