import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { customFetch } from '../utils/axios';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [isProductLoading, setIsProductLoading] = useState(false);

    function toggleSidebar() {
        setIsOpenSidebar((prev) => !prev);
    }

    useEffect(() => {
        setIsProductLoading(true);
        customFetch
            .get(`/products`)
            .then((res) => {
                setProducts(res.data);
                setFeaturedProducts(
                    res.data.filter((p) => p.featured === true)
                );
                setIsProductLoading(false);
            })
            .catch((err) => {
                setErr(err);
                setIsProductLoading(false);
            });
    }, []);

    console.log(products);

    return (
        <ProductContext.Provider
            value={{
                isOpenSidebar,
                setIsOpenSidebar,
                toggleSidebar,
                featuredProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}
