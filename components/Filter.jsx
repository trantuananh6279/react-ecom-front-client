import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import getUniqueValues from '../utils/getUniqueValues';
import formatPrice from '../utils/formatPrice';
import { useState } from 'react';

const Wrapper = styled.div`
    font-size: 14px;
    .form-control {
        margin-bottom: 1.25rem;
        .search-input {
            width: 100%;
            padding: 8px;
            border: none;
            letter-spacing: 0.1rem;
            background-color: #f1f5f8;
        }
        h5 {
            margin-bottom: 0.5rem;
            font-size: 16px;
        }
        button {
            display: block;
            padding: 0.25rem 0;
            margin: 0.25rem 0;
            color: #617d98;
            font-size: 14px;
            border: none;
            letter-spacing: 0.1rem;
            text-transform: capitalize;
            background-color: transparent;
            cursor: pointer;
            border-bottom: 1px solid transparent;
        }
        .active {
            border-color: #617d98;
        }
        .price {
            color: #324d67;
        }
        .company {
            text-transform: capitalize;
        }
    }
    .clear-btn {
        background: #bb2525;
        color: #fff;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        border: none;
        padding: 4px 8px;
        font-size: 14px;
        letter-spacing: 0.1rem;
    }
    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
        }
    }
`;

export default function Filter() {
    const {
        products,
        setSearch,
        price,
        maxPrice,
        setPrice,
        category,
        setCategory,
        company,
        setCompany,
    } = useFilterContext();

    const categories = getUniqueValues(products, 'category');
    const companies = getUniqueValues(products, 'company');

    return (
        <Wrapper>
            <div className="content">
                <div className="form-control">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search"
                        className="search-input"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <h5>Category</h5>
                    {categories.map((c, i) => (
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
                        {companies.map((c, i) => (
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
                <button className="clear-btn">Clear filter</button>
            </div>
        </Wrapper>
    );
}
