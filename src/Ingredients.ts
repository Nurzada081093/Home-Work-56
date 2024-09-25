import meatImage from './assets/meat.png';
import saladImage from './assets/salad.png';
import cheeseImage from './assets/chees.png';
import baconImage from './assets/bacon.png';
import {Ingredient} from './types';

const INGREDIENTS: Ingredient[] = [
    {id: 1, name: 'Meat', price: 80, image: meatImage},
    {id: 2, name: 'Salad', price: 10, image: saladImage},
    {id: 3, name: 'Cheese', price: 50, image: cheeseImage},
    {id: 4, name: 'Bacon', price: 60, image: baconImage},
];

export default INGREDIENTS;