import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/ItemInterface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
