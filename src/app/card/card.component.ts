import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from '../models/item';
import { MyActions } from '../store/myStore.actions';
import { MySelectors } from '../store/myStore.selectors';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    cardItems$: Observable<IItem[]>;

    constructor(private store$: Store) {
      this.cardItems$ = this.store$.select(MySelectors.cardItems); 
    }

    onRemoveFromCard = (index: number): void => {
      this.store$.dispatch(MyActions.removeCardItem({ index: index }));
    }
}
