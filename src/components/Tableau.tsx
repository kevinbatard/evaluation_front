import { useEffect, useContext } from 'react';
import { url } from '../constants/url';
import { ProductContext } from '../context/ProductContext';
import Delete from './Delete';
import Update from './Update';

export default function Tableau() {
    const { product, setProduct } = useContext(ProductContext);
    useEffect(() => {
        fetch(`${url}/produits`)
            .then((response) => response.json())
            .then((data) => setProduct(data.data))
            .catch((err) => console.error(err));
    }, [setProduct]);
    console.log(product);

    const data = product.map((elm, i) => (
        <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{elm.nom}</td>
            <td>{elm.prix}</td>
            <td>{elm.quantité}</td>
            <td>
                <Update />
                <Delete id={elm.id} />
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
