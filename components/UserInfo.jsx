import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem;
    border: 1px solid #ccc;
    input {
        width: 100%;
        padding: 6px 12px;
        margin-top: 6px;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
    }
    input:nth-child(4) {
        width: 30%;
    }
    input:nth-child(5) {
        width: 70%;
    }
    @media (min-width: 768px) {
        input:nth-child(6),
        input:nth-child(7) {
            width: 50%;
        }
    }
`;

export default function UserInfo({ values, handleChange }) {
    return (
        <Wrapper>
            <h4>Payment information</h4>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
            />
            <input
                type="number"
                name="postalCode"
                placeholder="Postal code"
                value={values.postalCode}
                onChange={handleChange}
            />
            <input
                type="text"
                name="streetAddress"
                placeholder="Street address"
                value={values.streetAddress}
                onChange={handleChange}
            />
            <input
                type="text"
                name="country"
                placeholder="Country"
                value={values.country}
                onChange={handleChange}
            />
        </Wrapper>
    );
}
