import Center from './Center';
import { services } from '../utils/contant';
import Wrapper from '../styles/Service';

export default function Service() {
    return (
        <Wrapper>
            <Center>
                <div className="service-top">
                    <h3 className="title">
                        Custom Furniture <br />
                        Built Only For You
                    </h3>
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
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div>
                        );
                    })}
                </div>
            </Center>
        </Wrapper>
    );
}
