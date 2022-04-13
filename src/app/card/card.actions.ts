import { Action } from '@ngrx/store';
import { IItem } from '../models/item';

export const ADD_TO_CARD = '[CARD] Add';
export const REMOVE_FROM_CARD = '[CARD] Remove';
export const CLEAR_CARD = '[CARD] Clear';

export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

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
