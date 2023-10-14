import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { customFetch } from '../utils/axios';
import { debounce } from 'lodash';
import { useProductContext } from './ProductContext';

const FilterContext = createContext();

export function FilterProvider({ children }) {
    const { products } = useProductContext();
    const [gridView, setGridView] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [company, setCompany] = useState('all');
    const [price, setPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [sort, setSort] = useState('price-lowest');
    const debouncedSearch = useCallback(debounce(searchProducts, 500), []);

    function toggleGriView() {
        setGridView((prev) => !prev);
    }

    function searchProducts(search, price) {
        setIsLoading(true);
        customFetch
            .get(`/products?search=${search}&price=${price}`)
            .then((res) => {
                setFilteredProducts(res.data);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        debouncedSearch(search, price);
    }, [search, price]);

    useEffect(() => {
        customFetch.get('/products').then((res) => {
            let maxPrice = res.data.map((p) => p.price);
            maxPrice = Math.max(...maxPrice);
            setMaxPrice(maxPrice);
            setPrice(maxPrice);
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        customFetch
            .get(
                `/products?category=${category}&company=${company}&sort=${sort}`
            )
            .then((res) => {
                setFilteredProducts(res.data);
                setIsLoading(false);
            });
    }, [category, company, sort]);

    return (
        <FilterContext.Provider
            value={{
                gridView,
                toggleGriView,
                products,
                filteredProducts,
                isLoading,
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
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}

export function useFilterContext() {
    return useContext(FilterContext);
}
