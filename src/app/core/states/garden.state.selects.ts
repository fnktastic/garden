import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GardenStateModel } from './garden.state.models';

@Injectable({
    providedIn: 'root',
})
export class Selects {
    @Select(state => state.gardenState) gardenState$: Observable<GardenStateModel>
}
