import React from 'react';
import {IIngredients} from '../../types';

interface IProps {
    ingredients: IIngredients[];
}

interface IPropsArray {
    id: string;
    name: string;
}

const Ingredient: React.FC<IProps>= ({ingredients}) => {

    const ingredientsArray: IPropsArray[] = [];
    ingredients.forEach((ingredient:IIngredients) => {
        if (ingredient.count > 0) {
            for (let i: number = 0; i < ingredient.count; i++) {
                ingredientsArray.push({id: `${ingredient.name + i}`, name: ingredient.name});
            }
        }
    });

    return (
        <>
            {ingredientsArray.length > 0 ? (
                ingredientsArray.map((ingredient) => (
                    <div key={ingredient.id} className={ingredient.name}></div>
                ))
            ) : null}
        </>
    );
};

export default Ingredient;