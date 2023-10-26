import Wrapper from '../styles/UserInfo';

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
