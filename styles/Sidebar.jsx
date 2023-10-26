import styled from 'styled-components';

const Wrapper = styled.div`
    .sidebar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        padding: 20px;
        background-color: #fff;
        text-transform: capitalize;
        font-size: 20px;
        transition: all 0.3s linear;
        transform: translate(-100%);
        z-index: -1;
    }
    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }
    li {
        padding: 16px 0;
        a {
            display: block;
            width: 100%;
        }
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
            width: 32px;
            height: 32px;
            background-color: #fff;
            color: red;
            cursor: pointer;
            border: none;
            svg {
                width: 28px;
                height: 28px;
            }
        }
    }
    .actions-wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 225px;
        margin: 1rem auto;
        text-align: center;
        font-size: 24px;
        a {
            padding: 10px;
        }
    }
    @media (min-width: 768px) {
        display: none;
    }
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
            top: -2px;
            right: -6px;
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
`;

export default Wrapper;
