import Center from './Center';
import Wrapper from '../styles/Contact';

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
