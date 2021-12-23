import {AnimalEnum, AnimalType} from '../animal-type';
import {FoodEnum} from '../../food/food-type';

import dogImage1 from './image/dog-1.svg';

export const dogAnimal: AnimalType = {
    foodIdList: [FoodEnum.meat],
    id: AnimalEnum.dog,
    imageList: [dogImage1],
};