import * as React from 'react';
import {Ingredient} from '../../../types';
import './Button.css';

interface IProps {
    ingredient: Ingredient;
    ingredientCount: number;
    addIngredient: React.MouseEventHandler;
    removeIngredient: React.MouseEventHandler;
}

const Buttons: React.FC<IProps>= ({ingredient, ingredientCount, addIngredient, removeIngredient}) => {
    return (
        <>
            <div className="button-block">
                <div>
                    <button type="button" className="button-ingredient" onClick={addIngredient}>
                        <img className="ingredient-img" src={ingredient.image} alt={ingredient.name}/>
                    </button>
                </div>
                <div>{ingredient.name}</div>
                <div>x {ingredientCount}</div>
                <div>
                    {ingredientCount ? <button type="button" className="remove-button" onClick={removeIngredient}>
                        <img className="remove-img" src="https://img.icons8.com/ios-filled/50/delete.png" alt="delete"/>
                    </button> : null}
                </div>
            </div>
        </>
    );
};

export default Buttons;