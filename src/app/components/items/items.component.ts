import { Component } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items: Item[] = [
      {
      id: 0,
      title: 'Hábitos atómicos',
      price: 2800,
      quantity: 2,
      completed: false
    },
    {
      id: 1,
      title: 'Los padecientes',
      price: 3000,
      quantity: 3,
      completed: true
    }
    ];
}
