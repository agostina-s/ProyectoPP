import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  items: Item[] = [];
  total: number = 0;

  constructor () {}

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'Hábitos atómicos',
        price: 2800,
        quantity: 2,
        completed: false,
      },
      {
        id: 1,
        title: 'Los padecientes',
        price: 3000,
        quantity: 3,
        completed: true,
      },
      {
        id: 2,
        title: 'Este dolor no es mío',
        price: 3500,
        quantity: 1,
        completed: true,
      },
      {
        id: 3,
        title: 'Sinsajo',
        price: 2500,
        quantity: 2,
        completed: false,
      }
    ];

    this.getTotal();
  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id);
    this.getTotal();
  }

  toggleItem(item: Item){
    this.getTotal();

  }

  getTotal(){
    this.total = this.items.filter(item => !item.completed).map(item => item.quantity * item.price).reduce((acc, item) => acc += item, 0);
  }

}
