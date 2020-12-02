import { Action, NgxsOnChanges, NgxsSimpleChange, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from "@angular/core";
import { GardenStateModel } from './garden.state.models';
import { AddPlant, CreateGarden } from './garden.state.actions';
import { produce } from 'immer';

export abstract class BaseSate implements NgxsOnChanges {
    abstract stateName: string;

    constructor() { } 

    ngxsOnChanges(change: NgxsSimpleChange) {
        console.log(`${this.stateName} prev state`, change.previousValue);
        console.log(`${this.stateName} next state`, change.currentValue);
    }
}


@State<GardenStateModel>({
    name: 'gardenState',
    defaults: {
        garden: {
            name: undefined,
            square: undefined,
            plants: []
        }
    }
})
@Injectable()
export class GardenState extends BaseSate{
    stateName: string = 'GardenState';
    
    constructor(protected store: Store) {
        super();
    }

    @Action(CreateGarden)
    createGarden(ctx: StateContext<GardenStateModel>, action: CreateGarden) {
        ctx.setState(produce((draft) => {
            draft.garden.name = action.name;
            draft.garden.square = action.square;
        }));
    }
    @Action(AddPlant)
    addPlant(ctx: StateContext<GardenStateModel>, action: AddPlant) {
        const plant = action.plant;
        ctx.setState(produce((draft) => {
            draft.garden.plants.push(plant);
        }));
    }
}