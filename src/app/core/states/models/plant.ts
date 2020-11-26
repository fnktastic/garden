export interface Plant {
    name: string;
    age: number;
    health: number;
    type: 'herb' | 'flower' | 'bush' | 'tree' | 'fruit-tree';
    species: string;
    place: string;
}