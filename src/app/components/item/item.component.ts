import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/ItemInterface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { emit } from 'process';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() onDeleteItem: EventEmitter<Item> = new EventEmitter();
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item) {
    this.onDeleteItem.emit(item);
  }

}
