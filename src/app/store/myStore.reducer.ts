import { Action, createReducer, on } from '@ngrx/store';
import { IItem } from '../models/item';
import { MyActions } from './myStore.actions';

export interface State {
  card: IItem[];
  marketPlace: IItem[];
}

const initialState: State = {
  card: [],
  marketPlace: []
};

const myReducer = createReducer(
  initialState,
  on(MyActions.addCardItem, (state, { item }) => ({
    card: [...state.card, item],
    marketPlace: [...state.marketPlace]
  })),
  on(MyActions.removeCardItem, (state, { index }) => ({
    card: state.card.filter((el, elIndex) => {
      return elIndex != index;
    }),
    marketPlace: [...state.marketPlace]
  })),
  on(MyActions.clearCard, (state) => ({
    card: [],
    marketPlace: [...state.marketPlace]
  })),
  on(MyActions.loadItemsSuccess, (state, action) => ({
    card: state.card,
    marketPlace: [...state.marketPlace, ...action.items]
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return myReducer(state, action);
}
