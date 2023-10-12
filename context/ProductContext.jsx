import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { customFetch } from '../utils/axios';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [isProductLoading, setIsProductLoading] = useState(false);
    const [singleProduct, setSingleProduct] = useState({});
    const [isSingleProductLoading, setSingleProductLoading] = useState(false);

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

    function fetchSingleProduct(id) {
        setSingleProductLoading(true);
        customFetch
            .get(`/products/${id}`)
            .then((res) => {
                setSingleProduct(res.data);
                setSingleProductLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsProductLoading(false);
            });
    }

    return (
        <ProductContext.Provider
            value={{
                isOpenSidebar,
                setIsOpenSidebar,
                toggleSidebar,
                featuredProducts,
                fetchSingleProduct,
                isProductLoading,
                isSingleProductLoading,
                singleProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}
