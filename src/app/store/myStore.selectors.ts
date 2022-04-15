import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./myStore.reducer";

export namespace MySelectors {
    export const state = createFeatureSelector<State>("myStore");

    export const cardItems = createSelector(state, (state) => state.card);

    export const cardItemsCount = createSelector(state, (state) => state.card.length);
}