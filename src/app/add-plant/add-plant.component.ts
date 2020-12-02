import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { sizeSet, typeSet } from '../core/models/plant';
import { AddPlant } from '../core/states/garden.state.actions';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  addPlant(name: string, age: number, health: number, type: typeSet, size: sizeSet, species: string, placeOfGrowth: string): void {
    this.store.dispatch(new AddPlant({
      name: name,
      age: age,
      health: health,
      type: type,
      size: size,
      species: species,
      placeOfGrowth: placeOfGrowth
    }))
    .subscribe();
  }

}
