import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 80px 20px;
    background-color: #eaded7;
    .title {
        margin-bottom: 32px;
        letter-spacing: 0.1rem;
    }
    .desc {
        line-height: 1.8;
        color: #795744;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
        margin-top: 4rem;
        .service-item {
            text-align: center;
            background-color: #c5a491;
            padding: 40px 32px;
            border-radius: 4px;
            span {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                background-color: #eaded7;
                margin-bottom: 12px;
                svg {
                    width: 28px;
                    height: 28px;
                    color: #453227;
                }
            }
            h2 {
                color: #453227;
                margin-bottom: 12px;
            }
            p {
                color: #5f4435;
            }
        }
    }
    @media (min-width: 768px) {
        padding: 80px 0 0 0;
        .service-top {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;
            align-items: center;
            .title {
                margin-bottom: 0;
            }
        }
        .content {
            position: relative;
            margin-top: 0;
            bottom: -60px;
            right: 0;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;

export default Wrapper;
