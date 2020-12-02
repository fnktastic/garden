export interface Plant {
    name: string;
    age: number;
    health: number;
    type: typeSet;
    size: sizeSet;
    species: string;
    placeOfGrowth: string;
}

export type typeSet = 'herb' | 'flower' | 'bush' | 'tree' | 'fruit-tree';

export type sizeSet = 'medium' | 'small' | 'large'