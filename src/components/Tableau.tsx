import { useEffect, useContext, useState } from 'react';
import { url } from '../constants/url';
import { ProductContext } from '../context/ProductContext';
import Delete from './Delete';
import Update from './Update';

export default function Tableau() {
    const { product, setProduct } = useContext(ProductContext);
    const [updating, setUpdating] = useState<number>(-1);
    const [nom, setNom] = useState<string>('');
    const [prix, setPrix] = useState<number>(-1);
    const [quantity, setQuantity] = useState<number>(-1);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    useEffect(() => {
        fetch(`${url}/produits`)
            .then((response) => response.json())
            .then((data) => setProduct(data.data))
            .catch((err) => console.error(err));
    }, [setProduct]);

    const data = product.map((elm, i) => (
        <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>
                {elm.id === updating ? (
                    <input
                        className="form-control form-control-sm"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        type="text"
                        required
                    ></input>
                ) : (
                    elm.nom
                )}
            </td>
            <td>
                {elm.id === updating ? (
                    <input
                        className="form-control form-control-sm"
                        value={prix}
                        onChange={(e) => setPrix(parseInt(e.target.value))}
                        type="number"
                        required
                    ></input>
                ) : (
                    elm.prix
                )}
            </td>
            <td>
                {elm.id === updating ? (
                    <input
                        className="form-control form-control-sm"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        type="number"
                        required
                    ></input>
                ) : (
                    elm.quantité
                )}
            </td>
            <td>
                <div className="d-flex">
                    <Update
                        data={elm}
                        updating={updating}
                        setUpdating={setUpdating}
                        setNom={setNom}
                        setPrix={setPrix}
                        setQuantity={setQuantity}
                        nom={nom}
                        prix={prix}
                        quantity={quantity}
                        isUpdating={isUpdating}
                        setIsUpdating={setIsUpdating}
                    />
                    <Delete
                        id={elm.id}
                        isUpdating={isUpdating}
                        setIsUpdating={setIsUpdating}
                        updating={updating}
                        setUpdating={setUpdating}
                    />
                </div>
            </td>
        </tr>
    ));

    return (
        <div className="table-responsive">
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
        </div>
    );
}
