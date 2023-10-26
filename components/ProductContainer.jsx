import { useProductContext } from '../context/ProductContext';
import GridView from './GridView';
import ListView from './ListView';
import Spinner from './Spinner';

export default function ProductContainer() {
    const {
        gridView,
        filteredProducts: products,
        isLoading,
    } = useProductContext();

    if (isLoading) {
        return <Spinner fullWidth={true} />;
    }
    if (products.length < 1) {
        return <h5>Sorry, no products matched your search.</h5>;
    }
    if (gridView) {
        return <GridView products={products} />;
    }
    return <ListView products={products} />;
}
