import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Packing Checklist';
  
  constructor() { }

  ngOnInit(): void {
  }

  createList() {
    console.log("create");
  }
}
