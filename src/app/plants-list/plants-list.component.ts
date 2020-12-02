import { Component, OnInit } from '@angular/core';
import { Plant } from '../core/models/plant';
import { Selects } from '../core/states/garden.state.selects';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.scss']
})
export class PlantsListComponent implements OnInit {
  plants: Plant[];

  constructor(private selects: Selects) { }

  ngOnInit(): void {
    this.selects.gardenState$.subscribe(x => this.plants = x.garden.plants);
  }

}
