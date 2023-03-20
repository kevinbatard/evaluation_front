import { useState, useContext } from 'react';
import { url } from '../constants/url';
import { ProductContext } from '../context/ProductContext';

export default function NewProduct() {
    const { product, setProduct } = useContext(ProductContext);
    const [openForm, setOpenForm] = useState({ display: 'inline' });
    const [addProduct, setAddProduct] = useState({ display: 'none' });
    const [nom, setNom] = useState<string>('');
    const [prix, setPrix] = useState<number>();
    const [quantity, setQuantity] = useState<number>();

    const Options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom: `${nom}`, prix: prix, quantité: quantity }),
    };

    const newProduct = () => {
        fetch(`${url}/produits`, Options)
            .then((response) => response.json())
            .then((response) => response.data)
            .then((response) => {
                const newProduct = [...product];
                newProduct.push(response);
                setProduct(newProduct);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <div className="p-3 mt-5 border" style={addProduct}>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Nom
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="NameInput"
                        onChange={(e) => setNom(e.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Prix
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="PriceInput"
                        onChange={(e) => setPrix(parseInt(e.target.value))}
                    ></input>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Quantité
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="QuantityInput"
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    ></input>
                </div>
                <div>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Ajouter"
                        onClick={() => {
                            newProduct();
                            setOpenForm({ display: 'inline' });
                            setAddProduct({ display: 'none' });
                        }}
                    ></input>
                </div>
            </div>
            <button
                className="btn btn-primary btn-lg mt-5 size-btn"
                type="submit"
                style={openForm}
                onClick={() => {
                    setOpenForm({ display: 'none' });
                    setAddProduct({ display: 'block' });
                }}
            >
                Ajouter un produit
            </button>
        </div>
    );
}
