import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import Tableau from './components/Tableau';
import { ProductContext } from './context/ProductContext';
import { TProduct } from './types/TProduct';

function App() {
    const [product, setProduct] = useState<TProduct[]>([]);
    return (
        <div className="App">
            <Header />
            <div className="container">
                <ProductContext.Provider value={{ product, setProduct }}>
                    <NewProduct />
                    <Tableau />
                </ProductContext.Provider>
            </div>
        </div>
    );
}

export default App;
