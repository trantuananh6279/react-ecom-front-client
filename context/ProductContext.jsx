import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { customFetch } from '../utils/axios';
import { debounce } from 'lodash';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isFeaturedProductLoading, setIsFeaturedProductLoading] =
        useState(false);
    const [gridView, setGridView] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [company, setCompany] = useState('all');
    const [price, setPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [sort, setSort] = useState('price-lowest');
    const debouncedSearch = useCallback(debounce(searchProducts, 500), []);
    const [wishedProducts, setWishedProducts] = useState([]);
    const [isWishedProductLoading, setIsWishedProductLoading] = useState(false);

    function toggleSidebar() {
        setIsOpenSidebar((prev) => !prev);
    }

    function toggleGriView() {
        setGridView((prev) => !prev);
    }

    async function getFeaturedProduct() {
        setIsFeaturedProductLoading(true);
        await customFetch
            .get('/products/featured')
            .then((res) => {
                const data = res.data.map((item) => ({
                    ...item,
                    isLiked: item.wishedProduct?.length > 0,
                }));
                setFeaturedProducts(data);
            })
            .finally(() => setIsFeaturedProductLoading(false));
    }

    function searchProducts(search, price, category, company, sort) {
        setIsLoading(true);
        customFetch
            .get(
                `/products?search=${search}&price=${price}&category=${category}&company=${company}&sort=${sort}`
            )
            .then((res) => {
                const data = res.data.map((item) => {
                    return {
                        ...item,
                        isLiked: item.wishedProduct?.length > 0,
                    };
                });
                setFilteredProducts(data);
                setIsLoading(false);
            });
    }

    function loadProducts() {
        setIsLoading(true);
        if (search !== '' || price !== '') {
            debouncedSearch(search, price, category, company, sort);
            return;
        }
        customFetch
            .get(
                `/products?category=${category}&company=${company}&sort=${sort}`
            )
            .then((res) => {
                const data = res.data.map((item) => {
                    return {
                        ...item,
                        isLiked: item.wishedProduct?.length > 0,
                    };
                });
                setFilteredProducts(data);
            })
            .finally(() => setIsLoading(false));
    }

    function getWishedProducts() {
        setIsWishedProductLoading(true);
        customFetch
            .get('/wish-list')
            .then((res) => {
                setWishedProducts(res.data);
            })
            .finally(() => setIsWishedProductLoading(false));
    }

    function removeProductFromWishlist(wishedProductId) {
        const tempWishedProducts = wishedProducts.filter(
            (p) => p._id !== wishedProductId
        );
        setWishedProducts(tempWishedProducts);
    }

    function clearFilters() {
        setSearch('');
        setCategory('all');
        setCompany('all');
        setPrice(
            customFetch.get('/products/max-price').then((res) => {
                setMaxPrice(res.data);
                setPrice(res.data);
            })
        );
    }

    useEffect(() => {
        customFetch.get('/products/max-price').then((res) => {
            setMaxPrice(res.data);
            setPrice(res.data);
        });
    }, []);

    return (
        <ProductContext.Provider
            value={{
                isOpenSidebar,
                toggleSidebar,
                featuredProducts,
                setFeaturedProducts,
                getFeaturedProduct,
                isFeaturedProductLoading,
                gridView,
                toggleGriView,
                filteredProducts,
                setFilteredProducts,
                isLoading,
                search,
                setSearch,
                price,
                maxPrice,
                setPrice,
                category,
                setCategory,
                company,
                setCompany,
                sort,
                setSort,
                loadProducts,
                isWishedProductLoading,
                wishedProducts,
                getWishedProducts,
                removeProductFromWishlist,
                clearFilters,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}
