import './App.css';
import {useState} from 'react';

const App = () => {
    const [totalPrice, setTotalPrise] = useState(30);


    return (
        <div className="container">
            <div className="card">
                <div className="cutout">Ingredients</div>
                <div className="text">
                    <div className="ingredients-block">

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="cutout">Burger</div>
                <div className="text">
                    <div className="Burger">
                        <div className="BreadTop">
                            <div className="Seeds1"></div>
                            <div className="Seeds2"></div>
                        </div>
                        <div className="BreadBottom"></div>
                    </div>
                    <div className="price">Price: <b>{totalPrice}</b></div>
                </div>
            </div>
        </div>
    );
};

export default App;