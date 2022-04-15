import { Component, OnInit } from '@angular/core';
// import { CardState } from '../card/card.reducer';
import { IItem } from '../models/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: IItem[] = [
    {
      id: 0,
      name: 'сас1',
      description: 'товар сас1',
      price: 200,
    },
    {
      id: 1,
      name: 'сас2',
      description: 'товар сас2',
      price: 200,
    },
    {
      id: 2,
      name: 'сас3',
      description: 'товар сас3',
      price: 200,
    },
    {
      id: 3,
      name: 'сас4',
      description: 'товар сас4',
      price: 200,
    },
    {
      id: 4,
      name: 'сас5',
      description: 'товар сас5',
      price: 200,
    },
    {
      id: 5,
      name: 'сас6',
      description: 'товар сас6',
      price: 200,
    },
  ];

  // card$: Observable<IItem[]>;
  // card$: Observable<number>;

  constructor(
    // private store: Store<CardState>
    ) {
    // this.card$ = this.store.select('items');
    // console.log(this.card$)
  }

  ngOnInit(): void {}

  // onAddToCard = (item: IItem) => {
  //   this.store.dispatch(new CardActions.AddToCard(item));
  // };

  // onClearCard = () => {
  //   this.store.dispatch(new CardActions.ClearCard());
  // };

  // onRemoveFromCard = (item: IItem) => {
  //   this.store.dispatch(new CardActions.RemoveFromCard(item));
  // };
}
