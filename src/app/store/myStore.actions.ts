import { createAction, props } from "@ngrx/store";
import { IItem } from "../models/item";

export namespace MyActions {
    export const addCardItem = createAction(
        "ADD_CARD_ITEM",
        props<{ item: IItem }>()
    );

    export const removeCardItem = createAction(
        "REMOVE_CARD_ITEM",
        props<{ index: number }>()
    );
}