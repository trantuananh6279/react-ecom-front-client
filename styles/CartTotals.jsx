import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    .cartTotal-container {
        padding: 1rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        h5,
        p,
        h4 {
            display: grid;
            grid-template-columns: 200px 1fr;
        }
        h5 {
            margin-bottom: 12px;
        }
        p {
            margin-bottom: 20px;
        }
        h4 {
            margin: 32px 0 12px;
        }
    }
    .btn.checkout {
        width: 100%;
        margin-top: 16px;
        padding: 6px 12px;
        font-size: 14px;
        text-align: center;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1.3fr 0.7fr;
    }
`;

export default Wrapper;
