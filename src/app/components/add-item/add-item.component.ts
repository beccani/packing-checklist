import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Item} from "../../ItemInterface";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter;
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert("Please add an item.")
      return;
    }

    const newItem = {
      text: this.text,
    }

    //this.onAddItem.emit(newItem);

    this.text= '';
  }

}