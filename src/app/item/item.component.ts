import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IItem } from '../models/item';
import { MyActions } from '../store/myStore.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: IItem = {
    id: 0,
    category: '',
    description: '',
    price: 0,
    image: '',
    title: '',
    rating: {
      count: 0,
      rate: 0
    }
  };

  addToCard = (item: IItem) => {
    this.store.dispatch(MyActions.addCardItem({item: item}));
  }

  constructor(private store: Store) {}
}
