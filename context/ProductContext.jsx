import { createContext, useContext, useEffect, useState } from 'react';
import { customFetch } from '../utils/axios';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [isProductLoading, setIsProductLoading] = useState(false);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

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
                console.log(err);
                setIsProductLoading(false);
            });
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                isProductLoading,
                featuredProducts,
                isOpenSidebar,
                toggleSidebar,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}
