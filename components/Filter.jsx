import formatPrice from '../utils/formatPrice';
import { useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import Wrapper from '../styles/Filter';

const initialValues = {
    categories: ['all', 'bedroom', 'office', 'kitchen'],
    companies: ['all', 'ikea', 'liddy', 'marcos', 'caressa'],
};

export default function Filter() {
    const {
        search,
        setSearch,
        price,
        maxPrice,
        setPrice,
        category,
        setCategory,
        company,
        setCompany,
        loadProducts,
        clearFilters,
    } = useProductContext();
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        loadProducts();
    }, [category, company, search, price]);

    return (
        <Wrapper>
            <div className="content">
                <div className="form-control">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search"
                        className="search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <h5>Category</h5>
                    {values.categories.map((c, i) => (
                        <button
                            key={i}
                            name="category"
                            type="button"
                            onClick={(e) => setCategory(e.target.textContent)}
                            className={c === category ? 'active' : null}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <div className="form-control">
                    <h5>Company</h5>
                    <select
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="company"
                    >
                        {values.companies.map((c, i) => (
                            <option key={i}>{c}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <h5>Price</h5>
                    <p className="price">{formatPrice(price)}</p>
                    <input
                        type="range"
                        name="price"
                        min={0}
                        max={maxPrice}
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                    />
                </div>
                <button className="clear-btn" onClick={clearFilters}>
                    Clear filter
                </button>
            </div>
        </Wrapper>
    );
}
