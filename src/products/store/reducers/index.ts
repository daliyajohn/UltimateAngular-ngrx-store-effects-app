import * as fromPizzaState from './pizzas.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';


export interface ProductState {
    pizzas:fromPizzaState.pizzaState
}

export const reducerConnect:ActionReducerMap<ProductState> = {
    pizzas:fromPizzaState.reducer
};

export const getProductState = createFeatureSelector<ProductState>('productsList');

export const getPizzaState = createSelector(getProductState , 
    (state:ProductState) => state.pizzas );

export const getAllPizza = createSelector(getPizzaState, fromPizzaState.getPizza );
export const getPizzaLoaded = createSelector(getPizzaState, fromPizzaState.getPizzaLoaded );
export const getPizzaLoading = createSelector(getPizzaState, fromPizzaState.getPizzaLoading );