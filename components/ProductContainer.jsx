import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
import Spinner from './Spinner';

export default function ProductContainer() {
    const {
        gridView,
        filteredProducts: products,
        isLoading,
    } = useFilterContext();

    if (products.length < 1) {
        return <h5>Sorry, no products matched your search.</h5>;
    }
    if (isLoading) {
        return <Spinner fullWidth={true} />;
    }
    if (gridView) {
        return <GridView products={products} />;
    }
    return <ListView products={products} />;
}
