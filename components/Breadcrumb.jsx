import { Link } from 'react-router-dom';
import Center from './Center';
import Wrapper from '../styles/Breadcrumb';

export default function Breadcrumb({ title, product }) {
    return (
        <Wrapper>
            <Center>
                <div className="pageHero-container">
                    <h3>
                        <Link to={'/'}>Home</Link>
                        {product && (
                            <Link to={'/products'}>/ Products</Link>
                        )}/ <span>{title}</span>
                    </h3>
                </div>
            </Center>
        </Wrapper>
    );
}
