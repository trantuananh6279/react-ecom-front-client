import styled from 'styled-components';
import Center from './Center';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { services } from '../utils/contant';

const Wrapper = styled.div`
    padding: 80px 20px;
    background-color: #eaded7;
    .title {
        font-size: 24px;
        margin-bottom: 32px;
        letter-spacing: 0.1rem;
    }
    .desc {
        font-size: 14px;
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

export default function Service() {
    return (
        <Wrapper>
            <Center>
                <div className="service-top">
                    <h2 className="title">
                        Custom Furniture <br />
                        Built Only For You
                    </h2>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe dolorum debitis consectetur reprehenderit non
                        aliquam voluptates dolore aut vero consequuntur
                    </p>
                </div>
                <div className="content">
                    {services.map((service) => {
                        const { id, icon, text, title } = service;
                        return (
                            <div className="service-item" key={id}>
                                <span>{icon}</span>
                                <h2>{title}</h2>
                                <p>{text}</p>
                            </div>
                        );
                    })}
                </div>
            </Center>
        </Wrapper>
    );
}
