import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Name } from "src/app/model/name.model";

const getState = createFeatureSelector<Name>('name');

export const getName = createSelector(getState , (state) =>{
    return state.name;
})