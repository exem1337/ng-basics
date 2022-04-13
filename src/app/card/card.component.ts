import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IItem } from '../models/item';
import { CardState } from './card.reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() card: IItem[] = [];

    items: Observable<IItem[]>;

    constructor(private store: Store<CardState>) {
      this.items = store.select('items');
    }
}
