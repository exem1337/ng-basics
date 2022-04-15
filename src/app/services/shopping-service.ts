import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IItem } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor(private http: HttpClient) {}

  getShoppingItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>('https://fakestoreapi.com/products/').pipe(
      map((data) => {
        const items: IItem[] = [];
        for (let key in data) {
          items.push({ ...data[key] });
        }
        return items;
      })
    );
  }
}
