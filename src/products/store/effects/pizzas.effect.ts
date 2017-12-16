import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as pizzaAction from '../actions/pizzas.action'

@Injectable()

export class PizzasEffects {
    constructor(private action$:Actions) {
    }
    @Effect()
    loadPizzas$ = this.action$.ofType(pizzaAction.LOAD_PIZZAS); 
    pipe() {}
}