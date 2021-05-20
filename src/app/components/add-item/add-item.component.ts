import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Item} from "../../ItemInterface";
import {Subscription} from 'rxjs';
import {UiService} from '../../services/ui.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter();
  text: string;
  packed: boolean = false;
  showAddItem: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddItem = value);
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert("Please add an item.")
      return;
    }

    const newItem = {
      text: this.text,
      packed: this.packed,
    }

    this.onAddItem.emit(newItem);
    this.text= '';
    this.packed = false;

  }

}
