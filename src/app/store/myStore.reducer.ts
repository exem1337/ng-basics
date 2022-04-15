import { Action, createReducer, on } from "@ngrx/store";
import { IItem } from "../models/item";
import { MyActions } from "./myStore.actions";

export interface State {
    card: IItem[]
}

const initialState: State = {
    card: []
}

const myReducer = createReducer(
    initialState, 
    on(MyActions.addCardItem, (state, { item }) => ({
        card: [...state.card, item]
    })),
    on(MyActions.removeCardItem, (state, { index }) => ({
        // card: removeFromCard(state.card, index)
        card: [...state.card].splice(index, 1)
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return myReducer(state, action);
}

