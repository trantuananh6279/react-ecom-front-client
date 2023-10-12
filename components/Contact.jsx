import styled from 'styled-components';
import Center from './Center';

const Wrapper = styled.div`
    padding: 80px 20px;

    h3 {
        font-size: 26px;
        letter-spacing: 2px;
        margin-bottom: 12px;
    }
    p {
        font-size: 14px;
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
            padding: 7px 20px;
            border: 1px solid #ccc;
        }
    }
    @media (min-width: 767px) {
        padding: 240px 0;
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: space-between;
            gap: 8rem;
            h3 {
                font-size: 32px;
            }
            p {
                font-size: 16px;
                line-height: 2;
                color: #617d98;
                margin-bottom: 0;
            }
        }
    }
`;

export default function Contact() {
    return (
        <Wrapper>
            <Center>
                <h3>Join our newsletter and get 20% off</h3>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat sint unde quaerat ratione soluta veniam
                        provident adipisci cumque eveniet tempore?
                    </p>
                    <form>
                        <input placeholder="Enter Email" />
                        <button className="btn">Subscribe</button>
                    </form>
                </div>
            </Center>
        </Wrapper>
    );
}
