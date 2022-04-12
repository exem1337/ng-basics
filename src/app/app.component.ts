import { Component } from '@angular/core';
import { IItem } from './models/item';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CardActions from './card/card.actions';

interface AppState {
  card: IItem[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-basics';

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

  card$: Observable<IItem[]>

  onAddToCard = (item: IItem) => {
    this.store.dispatch(CardActions.ADD_TO_CARD(item))
  }

  constructor(private store: Store<AppState>) {
    this.card$ = this.store.select('card');
  }


}
