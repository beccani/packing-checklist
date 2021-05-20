import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: string = 'Packing Checklist';
  showAddItem: boolean = true ;
  subscription: Subscription;
  
  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddItem = value);
   }

  ngOnInit(): void {}

  toggleCreateList() {
    this.uiService.toggleAddItem();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
