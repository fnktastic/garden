import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Garden } from '../core/models/garden';
import { CreateGarden } from '../core/states/garden.state.actions';
import { Selects } from '../core/states/garden.state.selects';

@Component({
  selector: 'app-set-garden',
  templateUrl: './set-garden.component.html',
  styleUrls: ['./set-garden.component.scss']
})
export class SetGardenComponent implements OnInit { 
  garden: Garden;

  constructor(private selects: Selects, private store: Store) { }

  ngOnInit(): void {
    this.selects.gardenState$.subscribe(x => this.garden = x.garden);
  }

  setGarden(name: string, square: number): void {
    this.store
        .dispatch(new CreateGarden(name, square))
        .subscribe();
  }
}
