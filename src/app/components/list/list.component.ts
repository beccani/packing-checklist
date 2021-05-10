import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service'
import {Item} from "../../ItemInterface"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Item[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.getList().subscribe((list) => this.list = list);
  }

}
