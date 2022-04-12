import { Action } from '@ngrx/store';
import { IItem } from '../models/item';

export const ADD_TO_CARD = '[Card] Add';
export const REMOVE_FROM_CARD = '[Card] Remove';
export const CLEAR_CARD = '[Card] Clear';

export class AddToCard implements Action {
  readonly type = ADD_TO_CARD;

  constructor(public payload: IItem) {}
}

export class RemoveFromCard implements Action {
  readonly type = REMOVE_FROM_CARD;

  constructor(public payload: IItem) {}
}

export class ClearCard implements Action {
  readonly type = CLEAR_CARD;
}

export type All = AddToCard | RemoveFromCard | ClearCard;
