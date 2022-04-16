import { Action, createReducer, on } from '@ngrx/store';
import { IItem } from '../models/item';
import { MyActions } from './myStore.actions';

export interface State {
  card: IItem[];
  marketPlace: IItem[];
  balance: number;
}

const initialState: State = {
  card: [],
  marketPlace: [],
  balance: 0
};

const myReducer = createReducer(
  initialState,
  on(MyActions.addCardItem, (state, { item }) => ({
    card: [...state.card, item],
    marketPlace: [...state.marketPlace],
    balance: state.balance
  })),
  on(MyActions.removeCardItem, (state, { index }) => ({
    card: state.card.filter((el, elIndex) => {
      return elIndex != index;
    }),
    marketPlace: [...state.marketPlace],
    balance: state.balance
  })),
  on(MyActions.clearCard, (state) => ({
    card: [],
    marketPlace: [...state.marketPlace],
    balance: state.balance
  })),
  on(MyActions.loadItemsSuccess, (state, action) => ({
    card: state.card,
    marketPlace: [...state.marketPlace, ...action.items],
    balance: state.balance
  })),
  on(MyActions.updateBalance, (state, action) => ({
    card: state.card,
    marketPlace: state.marketPlace,
    balance: action.balance
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return myReducer(state, action);
}
