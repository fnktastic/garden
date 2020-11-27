import { Plant } from './plant';

export interface Garden {
    name: string;
    square: number;
    plants: Plant[];
}