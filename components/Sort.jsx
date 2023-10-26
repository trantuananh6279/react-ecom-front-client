import { BsList, BsGridFill } from 'react-icons/bs';
import { useProductContext } from '../context/ProductContext';
import Wrapper from '../styles/Sort';

export default function Sort() {
    const { gridView, toggleGriView, sort, setSort, filteredProducts } =
        useProductContext();

    return (
        <Wrapper>
            <div className="btn-container">
                <button
                    className={gridView ? 'active' : null}
                    onClick={toggleGriView}
                >
                    <BsGridFill />
                </button>
                <button
                    className={!gridView ? 'active' : null}
                    onClick={toggleGriView}
                >
                    <BsList />
                </button>
            </div>
            <p>{filteredProducts.length} Product Found</p>
            <hr />
            <div className="sort-container">
                <span>Sort by</span>
                <select
                    name="sort"
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="sort-input"
                >
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name a-z</option>
                    <option value="name-z">name z-a</option>
                </select>
            </div>
        </Wrapper>
    );
}
