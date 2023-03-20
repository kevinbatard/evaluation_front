import { useState, useEffect } from 'react';
import { url } from '../constants/url';
import { TProduct } from '../types/TProduct';

export default function Tableau(props: {
    product: TProduct[];
    setProduct: React.Dispatch<React.SetStateAction<TProduct[]>>;
}) {
    useEffect(() => {
        fetch(`${url}/produits`)
            .then((response) => response.json())
            .then((data) => props.setProduct(data.data))
            .catch((err) => console.error(err));
    }, []);

    const data = props.product.map((elm, i) => (
        <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{elm.nom}</td>
            <td>{elm.prix}</td>
            <td>{elm.quantité}</td>
            <td>
                <button type="button" className="btn btn-primary btn-sm me-1">
                    Editer
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                    Supprimer
                </button>
            </td>
        </tr>
    ));

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th className="border-bottom border-dark" scope="col">
                        #
                    </th>
                    <th className="border-bottom border-dark" scope="col">
                        Nom
                    </th>
                    <th className="border-bottom border-dark" scope="col">
                        Prix
                    </th>
                    <th className="border-bottom border-dark" scope="col">
                        Quantité
                    </th>
                    <th className="border-bottom border-dark" scope="col">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>{data}</tbody>
        </table>
    );
}
