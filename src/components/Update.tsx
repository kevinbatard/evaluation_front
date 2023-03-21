import { useContext } from 'react';
import { url } from '../constants/url';
import { ProductContext } from '../context/ProductContext';
import { TProduct } from '../types/TProduct';

export default function Update(props: {
    nom: string;
    prix: number;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    setNom: React.Dispatch<React.SetStateAction<string>>;
    setPrix: React.Dispatch<React.SetStateAction<number>>;
    data: TProduct;
    updating: number;
    setUpdating: React.Dispatch<React.SetStateAction<number>>;
    isUpdating: boolean;
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { product, setProduct } = useContext(ProductContext);

    const Options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nom: props.nom,
            prix: props.prix,
            quantité: props.quantity,
        }),
    };

    const updateProduct = () =>
        fetch(`${url}/produits/${props.data.id}`, Options)
            .then((response) => response.json())
            .then((response) => response.data)
            .then((response) => {
                const newProduct = [...product];
                const updatedProducts = newProduct.map((product: TProduct) => {
                    if (product.id === props.data.id) {
                        return response;
                    }

                    return product;
                });
                setProduct(updatedProducts);
                props.setIsUpdating(false);
                props.setUpdating(-1);
            });

    return (
        <div>
            {props.isUpdating === false ? (
                <button
                    type="button"
                    className="btn btn-primary btn-sm me-1"
                    onClick={() => {
                        props.setNom(props.data.nom);
                        props.setPrix(props.data.prix);
                        props.setQuantity(props.data.quantité);
                        props.setUpdating(props.data.id);
                        props.setIsUpdating(true);
                    }}
                >
                    Editer
                </button>
            ) : (
                <div>
                    {props.updating === props.data.id ? (
                        <button
                            type="button"
                            className="btn btn-success btn-sm me-1"
                            onClick={() => {
                                if (
                                    props.nom.length === 0 ||
                                    !props.prix ||
                                    !props.quantity
                                )
                                    return alert(
                                        'Veuillez renseigner tous les champs'
                                    );

                                updateProduct();
                            }}
                        >
                            Valider
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-primary btn-sm me-1"
                            onClick={() => {
                                props.setNom(props.data.nom);
                                props.setPrix(props.data.prix);
                                props.setQuantity(props.data.quantité);
                                props.setUpdating(props.data.id);
                                props.setIsUpdating(true);
                            }}
                        >
                            Editer
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
