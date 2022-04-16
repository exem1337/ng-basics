import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MyActions } from '../store/myStore.actions';
import { MySelectors } from '../store/myStore.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  balance$: Observable<number>;
  currentBalanceSub: Subscription;
  currentBalance: number = 0;

  constructor(private store: Store) {
    this.balance$ = this.store.select(MySelectors.balance);
    this.currentBalanceSub = this.balance$.subscribe(
      (value: number) => {
        this.currentBalance = value;
      }
    )
  }

  onDecreaseBalance = (): void => {
    if (this.currentBalance - 100 >= 0)
      this.store.dispatch(
        MyActions.updateBalance({ balance: this.currentBalance - 100 })
      );
    else {
    }
  };

  onIncreaseBalance = (): void => {
    this.store.dispatch(
      MyActions.updateBalance({ balance: this.currentBalance + 100 })
    );
  };
}
