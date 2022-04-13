import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardState } from '../card/card.reducer';
import { IItem } from '../models/item';
import * as CardActions from '../card/card.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: IItem = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  addToCard = (item: IItem) => {
    this.store.dispatch(new CardActions.AddToCard(item));
  }

  constructor(private store: Store<CardState>) {}
}
