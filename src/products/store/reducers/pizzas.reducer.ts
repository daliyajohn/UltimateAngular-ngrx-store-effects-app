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
    data: [
        {
            "name": "Seaside Surfin'",
            "toppings": [
              {
                "id": 6,
                "name": "mushroom"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 2,
                "name": "bacon"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 1,
                "name": "anchovy"
              },
              {
                "id": 8,
                "name": "onion"
              },
              {
                "id": 11,
                "name": "sweetcorn"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 5,
                "name": "mozzarella"
              }
            ],
            "id": 2
          }
    ],
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

export const getPizzaLoading = (states:pizzaState) => states.loading
export const getPizzaLoaded = (states:pizzaState) => states.loaded
export const getPizza = (states:pizzaState) => states.data