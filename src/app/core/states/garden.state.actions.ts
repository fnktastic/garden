import { Plant, typeSet, sizeSet } from '../models/plant';

export class CreateGarden {
    static readonly type = '[Graden] Create Garden';
    constructor(public name: string, public square: number) {}
}

export class AddPlant {
    static readonly type = '[Garden] Add Plant';
    constructor(public plant: Plant) {}
}