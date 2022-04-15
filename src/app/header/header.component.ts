import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from '../models/item';
import { MySelectors } from '../store/myStore.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cardLength$: Observable<number>;
  
  constructor(private store: Store) {
    this.cardLength$ = this.store.select(MySelectors.cardItemsCount);
  }
}
