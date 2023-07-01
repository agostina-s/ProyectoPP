import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from "../models/item";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3000/items';
  httpOptions = {headers:{'Content-Type':'application/json'}};
  items: Item[] = [
    {
      id: 0,
      title: 'Agua',
      price: 2800,
      quantity: 2,
      completed: false,
    },
    {
      id: 1,
      title: 'Coca cola',
      price: 3000,
      quantity: 3,
      completed: true,
    },
    {
      id: 2,
      title: 'Hamburguesa',
      price: 3500,
      quantity: 1,
      completed: true,
    },
    {
      id: 3,
      title: 'Papitas',
      price: 2500,
      quantity: 2,
      completed: false,
    }
  ];
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url);

  }

  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item, this.httpOptions);

  }
}
