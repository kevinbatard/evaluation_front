import { useState } from 'react';

export default function NewProduct() {
    const [openForm, setOpenForm] = useState({ display: 'inline' });
    const [addProduct, setAddProduct] = useState({ display: 'none' });

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
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
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
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
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
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                    ></input>
                </div>
                <div>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Ajouter"
                        onClick={() => {
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
