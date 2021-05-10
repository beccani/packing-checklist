import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {Item} from "../ItemInterface"
import {mockList} from "../mock-list"

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getList(): Observable<Item[]> {
    const list = of(mockList);
    return list;
  }
}
