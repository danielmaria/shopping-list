import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ItemService } from './service/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopping-list';
  items!: Array<Item>

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.listAll();
    
  }
}
