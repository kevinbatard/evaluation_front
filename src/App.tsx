import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import Tableau from './components/Tableau';
import { TProduct } from './types/TProduct';

function App() {
    const [product, setProduct] = useState<TProduct[]>([]);
    return (
        <div className="App">
            <Header />
            <div className="container">
                <NewProduct product={product} setProduct={setProduct} />
                <Tableau product={product} setProduct={setProduct} />
            </div>
        </div>
    );
}

export default App;
