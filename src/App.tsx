import './App.css';
import {useState} from 'react';
import Buttons from './Components/Buttons/Buttons';
import {IIngredients} from './types';

const App = () => {
    const [ingredients, setIngredients] = useState<IIngredients[]>([
        {id: 1, name: 'Meat', count: 0},
        {id: 2, name: 'Cheese', count: 0},
        {id: 3, name: 'Salad', count: 0},
        {id: 4, name: 'Bacon', count: 0},
    ]);

    const [totalPrice, setTotalPrise] = useState(30);

    const addIngredient = (id: number) => {
        const index = ingredients.findIndex((ingredient) => ingredient.id === id);

        const copyIngredients = ingredients.map((ingredient, i) => {
            if (i === index) {
                return {
                    ...ingredient,
                    count: ingredient.count + 1,
                };
            }
            return {...ingredient};
        });

        setIngredients(copyIngredients);
    };


    const removeIngredient = () => {};

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
                        {}
                        <div className="BreadBottom"></div>
                    </div>
                    <div className="price">Price: <b>{totalPrice}</b></div>
                </div>
            </div>
        </div>
    );
};

export default App;


