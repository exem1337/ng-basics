import * as CardActions from './card.actions';
import { IItem } from '../models/item';

export type Action = CardActions.All;

const defaultState: IItem[] = [];

const newState = (state: any, newData: any) => {
    state = newData
    return Object.assign([], state, newData)
}

export function cardReducer(state: IItem[] = defaultState, action: Action) {
    switch(action.type) {
        case CardActions.ADD_TO_CARD:
            return newState(state, state.push(action.payload));
        
        case CardActions.CLEAR_CARD:
            return defaultState;

        case CardActions.REMOVE_FROM_CARD:
            return newState(state, state.filter((el) => el.id != action.payload.id));
        
        default: return state;
    }
}