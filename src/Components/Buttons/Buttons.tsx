import INGREDIENTS from '../../Ingredients';
import * as React from 'react';
import { IIngredients } from '../../types';
import Button from './Button/Button';

interface IProps {
    ingredients: IIngredients[];
    addIngredient: (id: number) => void;
    removeIngredient: (id: number) => void;
}

const Buttons: React.FC<IProps> = ({ ingredients, addIngredient, removeIngredient }) => {

    return (
        <>
            {INGREDIENTS.map((ingredient) => {

                const ingredientCount: number = ingredients.reduce((acc, countIngredient) => {
                    return countIngredient.id === ingredient.id ? countIngredient.count : acc;
                }, 0);

                return (
                    <Button
                        key={ingredient.id}
                        ingredient={ingredient}
                        ingredientCount={ingredientCount}
                        addIngredient={() => addIngredient(ingredient.id)}
                        removeIngredient={() => removeIngredient(ingredient.id)}
                    />
                );
            })}
        </>
    );
};

export default Buttons;