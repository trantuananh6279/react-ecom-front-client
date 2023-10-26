import ProductItem from './ProductItem';
import Wrapper from '../styles/GridView';

export default function GridView({ products }) {
    return (
        <Wrapper>
            {products.map((product) => {
                return (
                    <ProductItem
                        key={product._id}
                        product={product}
                        wished={product.isLiked}
                    />
                );
            })}
        </Wrapper>
    );
}
