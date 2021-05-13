import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import {Item} from "../ItemInterface"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:5000/list'

  constructor(private http:HttpClient) { }

  getList(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  deleteItem(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.delete<Item>(url);
  }

  updateItemPacked(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  }
}
