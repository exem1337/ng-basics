import { Action, createReducer, on } from '@ngrx/store';
import { IItem } from '../models/item';
import { MyActions } from './myStore.actions';

export interface State {
  card: IItem[];
}

const initialState: State = {
  card: [],
};

const myReducer = createReducer(
  initialState,
  on(MyActions.addCardItem, (state, { item }) => ({
    card: [...state.card, item],
  })),
  on(MyActions.removeCardItem, (state, { index }) => ({
    card: state.card.filter((el, elIndex) => {
      return elIndex != index;
    }),
  })),
  on(MyActions.clearCard, (state) => ({
    card: [],
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return myReducer(state, action);
}
