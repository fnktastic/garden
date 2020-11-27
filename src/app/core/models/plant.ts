export interface Plant {
    name: string;
    age: number;
    health: number;
    type: 'herb' | 'flower' | 'bush' | 'tree' | 'fruit-tree';
    size: 'medium' | 'small' | 'large';
    species: string;
    placeOfGrowth: string;
}