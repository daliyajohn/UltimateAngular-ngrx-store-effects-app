import * as fromPizzaState from "src/products/store/reducers/pizzas.reducer";
import { ActionReducerMap } from "@ngrx/store";


export interface ProductState {
    pizzas:fromPizzaState.pizzaState
}

export const reducerConnect:ActionReducerMap<ProductState> = {
    pizzas:fromPizzaState.reducer
};