import React from 'react';
import { TProduct } from '../types/TProduct';

export const ProductContext = React.createContext({
    product: [] as TProduct[],
    setProduct: (value: TProduct[]) => {},
});
