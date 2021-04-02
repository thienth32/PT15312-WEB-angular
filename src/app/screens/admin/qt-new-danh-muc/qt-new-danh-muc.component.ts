import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-qt-new-danh-muc',
  templateUrl: './qt-new-danh-muc.component.html',
  styleUrls: ['./qt-new-danh-muc.component.css']
})
export class QtNewDanhMucComponent implements OnInit {

  constructor() { }

  name: FormControl = new FormControl();

  ngOnInit(): void {
  }

}
