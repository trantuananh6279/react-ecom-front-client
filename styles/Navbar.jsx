import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 20px;
    padding: 12px 20px;
    z-index: 100;
    text-transform: capitalize;
    .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
            width: 32px;
            height: 32px;
            background-color: transparent;
            border: none;
            svg {
                width: 28px;
                height: 28px;
                color: #ab7a5f;
            }
        }
    }
    ul,
    .action-wrap {
        display: none;
    }
    @media (min-width: 768px) {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
            display: none;
            cursor: pointer;
        }
        ul {
            display: flex;
            li {
                margin: 0 16px;
            }
        }
        .action-wrap {
            display: block;
            .cart-btn {
                margin-right: 32px;
                position: relative;
                display: inline-flex;
                align-items: center;
                svg {
                    margin-left: 8px;
                }
                span {
                    position: absolute;
                    top: -12px;
                    right: -16px;
                    width: 24px;
                    height: 24px;
                    background-color: var(--primary-color);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                }
            }
            .login-btn {
                display: inline-flex;
                align-items: center;
                svg {
                    margin-left: 8px;
                }
            }
        }
    }
`;

export default Wrapper;
