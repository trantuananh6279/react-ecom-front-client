import styled from 'styled-components';
import { BsList, BsGridFill } from 'react-icons/bs';
import { useFilterContext } from '../context/FilterContext';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 32px;
    .btn-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 50px;
        gap: 0.5rem;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 24px;
            width: 24px;
            background-color: #fff;
            border: 1px solid #555555;
            cursor: pointer;
            svg {
                font-size: 16px;
            }
        }
        .active {
            background-color: #222;
            svg {
                color: #fff;
            }
        }
    }
    p {
        color: #324d67;
    }
    .sort-container {
        span {
            margin-right: 10px;
        }
        .sort-input {
            padding: 4px 8px;
            text-transform: capitalize;
            font-size: 16px;
            border: none;
        }
    }
    @media (min-width: 768px) {
        grid-template-columns: auto auto 1fr auto;
        align-items: center;
        gap: 2rem;
        hr {
            height: 1px;
        }
    }
`;

export default function Sort() {
    const { gridView, toggleGriView, sort, setSort, filteredProducts } =
        useFilterContext();

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
