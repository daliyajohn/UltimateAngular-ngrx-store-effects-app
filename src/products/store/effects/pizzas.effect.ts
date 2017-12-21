import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as pizzaAction from '../actions/pizzas.action';
import { switchMap, map } from 'rxjs/operators';
import * as fromService from '../../services';
import { of } from 'rxjs/observable/of'; 
@Injectable()

export class PizzasEffects {
    constructor(private action$:Actions, private pizzaService: fromService.PizzasService) {
    }
    @Effect()
    loadPizzas$ = this.action$.ofType(pizzaAction.LOAD_PIZZAS); 
    .pipe(switchMap((): any => {
        return this.pizzaService.getPizzas().pipe(
            map( pizzas => new pizzaAction.LOAD_PIZZAS_SUCCESS(pizzas),
            catchError( error => of( new pizzaAction.LOAD_PIZZAS_FAIL(Error)))
        )
    }));
}