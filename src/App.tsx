import './App.css';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import Tableau from './components/Tableau';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <NewProduct />
                <Tableau />
            </div>
        </div>
    );
}

export default App;
