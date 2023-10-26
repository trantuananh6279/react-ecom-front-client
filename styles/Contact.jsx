import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 80px 20px;

    h3 {
        font-size: 26px;
        letter-spacing: 2px;
        margin-bottom: 12px;
    }
    p {
        margin-bottom: 20px;
    }
    form {
        display: grid;
        grid-template-columns: 1.6fr 0.4fr;
        width: 90vw;
        max-width: 550px;
        input {
            padding: 8px 16px;
            border: 1px solid #ccc;
            outline: none;
            border-radius: 4px;
        }
        button {
            border: 1px solid #ccc;
        }
    }
    @media (min-width: 768px) {
        padding: 240px 0;
        h3 {
            font-size: 32px;
        }
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: space-between;
            gap: 8rem;
            p {
                font-size: 16px;
                line-height: 2;
                color: #617d98;
                margin-bottom: 0;
            }
        }
    }
`;

export default Wrapper;
