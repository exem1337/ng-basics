import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { IItem } from '../models/item';
import { MyActions } from '../store/myStore.actions';
import { MySelectors } from '../store/myStore.selectors';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardItems$: Observable<IItem[]>;
  totalPrice: number = 0;
  currentBalanceSub: Subscription;
  currentBalance: number = 0;
  canPurchase: boolean = false;

  constructor(private store$: Store) {
    this.cardItems$ = this.store$.select(MySelectors.cardItems);
    this.currentBalanceSub = this.store$.select(MySelectors.balance).subscribe((value: number) => {
      this.currentBalance = value;
      this.currentBalance >= this.totalPrice ? this.canPurchase = true : this.canPurchase = false;
    });
  }

  onRemoveFromCard = (index: number): void => {
    this.store$.dispatch(MyActions.removeCardItem({ index: index }));
  };

  onPurchase = (): void => {
    if (this.currentBalance >= this.totalPrice) {
      this.store$.dispatch(
        MyActions.updateBalance({
          balance: this.currentBalance - this.totalPrice,
        })
      );
      this.store$.dispatch(MyActions.clearCard());
    }
  };

  onClearCard = (): void => {
    this.store$.dispatch(MyActions.clearCard());
  };

  ngOnInit(): void {
    this.cardItems$.subscribe((items) => {
      let sum = 0;
      items.forEach((el) => {
        sum += el.price;
      });
      this.totalPrice = sum;
    });
    this.currentBalance >= this.totalPrice ? this.canPurchase = true : this.canPurchase = false;
  }
}
