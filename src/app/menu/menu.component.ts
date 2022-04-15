import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from '../models/item';
import { MySelectors } from '../store/myStore.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items: Observable<IItem[]>;

  constructor(private store: Store) {
    this.items = this.store.select(MySelectors.marketPlace);
  }
}
