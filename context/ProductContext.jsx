import { createContext, useContext, useEffect, useState } from 'react';
import { customFetch } from '../utils/axios';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [isProductLoading, setIsProductLoading] = useState(false);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [wishedProductIds, setWishedProductIds] = useState([]);
    const [wishedProducts, setWishedProducts] = useState([]);

    function toggleSidebar() {
        setIsOpenSidebar((prev) => !prev);
    }

    function getWishedProductIds() {
        customFetch.get('/wish-list').then((res) => {
            const productIds = res.data.map((p) => p.product._id);
            setWishedProductIds(productIds);
        });
    }

    function getWishedProducts() {
        customFetch.get('/wish-list').then((res) => {
            const products = res.data.map((p) => p.product);
            setWishedProducts(products);
        });
    }

    function onRemoveFromWishlist(_id) {
        setWishedProducts((products) => {
            return [...products.filter((p) => p._id.toString() !== _id)];
        });
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
                wishedProductIds,
                getWishedProductIds,
                wishedProducts,
                getWishedProducts,
                onRemoveFromWishlist,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}
