import * as CardActions from './card.actions';
import { IItem } from '../models/item';

export type Action = CardActions.All;

const defaultState: IItem = {
    id: 0,
    name: '',
    description: '',
    price: 0
};

export interface CardState {
    items: IItem[];
}

export function cardReducer(state: IItem[] = [], action: CardActions.All): CardState {
    switch(action.type) {
        case CardActions.ADD_TO_CARD:
            return { items: [...state, action.payload] };
        
        case CardActions.CLEAR_CARD:
            return { items: [] };

        case CardActions.REMOVE_FROM_CARD:
            return { items: state.filter((el) => el.id != action.payload.id) };
        
        default: return { items: state };
    }
}