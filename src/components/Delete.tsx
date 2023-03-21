import { useContext } from 'react';
import { url } from '../constants/url';
import { ProductContext } from '../context/ProductContext';

export default function Delete(props: {
    id: number;
    isUpdating: boolean;
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
    updating: number;
    setUpdating: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { product, setProduct } = useContext(ProductContext);

    const deleteProduct = () =>
        fetch(`${url}/produits/${props.id}`, { method: 'DELETE' })
            .then(() =>
                setProduct(product.filter((item) => item.id !== props.id))
            )
            .catch((err) => console.error(err));

    return (
        <div>
            {props.isUpdating === false ? (
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={deleteProduct}
                >
                    Supprimer
                </button>
            ) : (
                <div>
                    {props.id === props.updating ? (
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                props.setIsUpdating(false);
                                props.setUpdating(-1);
                            }}
                        >
                            Retour
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={deleteProduct}
                        >
                            Supprimer
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
