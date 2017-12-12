import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';
import * as fromPizzas from '../actions/pizzas.action';


export interface pizzaState  {
    data: Pizza[],
    loaded:boolean,
    loading:boolean
}
export const initialState: pizzaState = {
    data: [],
    loaded:false,
    loading:false
}



export function reducer(state = initialState, action: fromPizzas.PizzasAction):pizzaState {

    switch(action.type) {
        case fromPizzas.LOAD_PIZZAS: {
            return {
                ...state,
                loading:true
            };
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {
            return {
                ...state,
                loading:false,
                loaded:false
            };
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            return {
                ...state,
                loading:false,
                loaded:true

            };
        }
        
    }
    return state;
}