import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = "http://localhost:3000/categories";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(this.API_URL);
  }

  findById(cateId: string): Observable<Category>{
    let requestUrl = `${this.API_URL}/${cateId}?_embed=comics`;
    return this.http.get<Category>(requestUrl);
  }
}
