import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service'
import {Item} from "../../ItemInterface"
import { faTasks } from '@fortawesome/free-solid-svg-icons';

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

  deleteItem(item: Item) {
    this.listService.deleteItem(item).subscribe(
      () => this.list = this.list.filter(t => t.id !== item.id));
  }

  togglePacked(item: Item) {
    item.packed = !item.packed;
    //console.log(item.packed);
    this.listService.updateItemPacked(item).subscribe();
  }

  addItem(item: Item) {
    console.log(item);
  }
}

