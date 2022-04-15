import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, withLatestFrom } from 'rxjs';
import { ShoppingService } from '../services/shopping-service';
import { MyActions } from './myStore.actions';

@Injectable()
export class ShoppingEffects {
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService,
    private store: Store
  ) {}

  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MyActions.loadItems),
      mergeMap((action) => {
        return this.shoppingService.getShoppingItems().pipe(
          map((data) => {
            return MyActions.loadItemsSuccess({ items: data });
          })
        );
      })
    );
  });
}
