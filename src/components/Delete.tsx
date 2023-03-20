import { useContext } from 'react';
import { url } from '../constants/url';
import { ProductContext } from '../context/ProductContext';

export default function Delete(props: { id: number }) {
    const { product, setProduct } = useContext(ProductContext);

    const deleteProduct = () =>
        fetch(`${url}/produits/${props.id}`, { method: 'DELETE' })
            .then(() =>
                setProduct(product.filter((item) => item.id !== props.id))
            )
            .catch((err) => console.error(err));

    return (
        <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={deleteProduct}
        >
            Supprimer
        </button>
    );
}
