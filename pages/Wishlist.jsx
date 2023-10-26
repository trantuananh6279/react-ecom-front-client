import styled from 'styled-components';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Center from '../components/Center';
import Breadcrumb from '../components/Breadcrumb';
import ListViewItem from '../components/ListviewItem';

const Wrapper = styled.div`
    min-height: calc(100vh - (20vh - 12px));
    .wishlist-container {
        padding: 80px 20px;
        display: grid;
        gap: 2rem;
    }
    .empty-wishlist {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - (20vh - 12px));
    }
    @media (min-width: 768px) {
        min-height: calc(100vh - (20vh - 42px));
    }
`;

export default function WishlistPage() {
    // useEffect(() => {
    //     getWishedProducts(location);
    // }, []);

    // if (wishedProducts.length === 0) {
    //     return (
    //         <Wrapper>
    //             <Center>
    //                 <div className="empty-wishlist">
    //                     <h4>Your wishlist is empty</h4>
    //                     <Link to={'/'} className="btn">
    //                         Go back home
    //                     </Link>
    //                 </div>
    //             </Center>
    //         </Wrapper>
    //     );
    // }

    return (
        <Wrapper>
            <Breadcrumb title={'wishlist'} />
            <Center>
                <div className="wishlist-container">
                    {/* {wishedProducts?.map((wishedProduct, i) => (
                        <ListViewItem
                            {...wishedProduct}
                            key={i}
                            wished={true}
                        />
                    ))} */}
                </div>
            </Center>
        </Wrapper>
    );
}
