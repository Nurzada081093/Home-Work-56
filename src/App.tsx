import './App.css';
import {useState} from 'react';
import Buttons from './Components/Buttons/Buttons';
import Ingredient from './Components/Ingredient/Ingredient';
import {IIngredients} from './types';

const App = () => {
    const [ingredients, setIngredients] = useState<IIngredients[]>([
        {id: 1, name: 'Meat', count: 0, price: 80},
        {id: 2, name: 'Salad', count: 0, price: 10},
        {id: 3, name: 'Cheese', count: 0, price: 50},
        {id: 4, name: 'Bacon', count: 0, price: 60},
    ]);

    const [totalPrice, setTotalPrise] = useState<number>(30);

    const addIngredient = (id: number) => {
        const index:number = ingredients.findIndex((ingredient) => ingredient.id === id);

        const copyIngredients = ingredients.map((ingredient, i) => {
            if (i === index) {
                return {
                    ...ingredient,
                    count: ingredient.count + 1,
                };
            }
            return {...ingredient};
        });

        const totalNewPrice = copyIngredients.reduce((acc, ingredient) => {
            acc += ingredient.count * ingredient.price;
            return acc;
        }, 30);

        setIngredients(copyIngredients);
        setTotalPrise(totalNewPrice);
    };


    const removeIngredient = (id: number) => {
        const index:number = ingredients.findIndex((ingredient) => ingredient.id === id);

        const copyIngredients = ingredients.map((ingredient, i) => {
            if (i === index) {
                return {
                    ...ingredient,
                    count: ingredient.count - 1,
                };
            }
            return {...ingredient};
        });

        const totalNewPrice = copyIngredients.reduce((acc, ingredient) => {
            acc += ingredient.count * ingredient.price;
            return acc;
        }, 30);

        setTotalPrise(totalNewPrice);
        setIngredients(copyIngredients);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="cutout">Ingredients</div>
                <div className="text">
                    <div className="ingredients-block">
                       <Buttons ingredients={ingredients} addIngredient={addIngredient} removeIngredient={removeIngredient}/>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="cutout">Burger</div>
                <div className="text burger-content">
                    <div className="Burger">
                        <div className="BreadTop">
                            <div className="Seeds1"></div>
                            <div className="Seeds2"></div>
                        </div>
                        <Ingredient ingredients={ingredients}/>
                        <div className="BreadBottom"></div>
                    </div>
                    <div className="price">Price: <b>{totalPrice} $</b></div>
                </div>
            </div>
        </div>
    );
};

export default App;


