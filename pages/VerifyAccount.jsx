import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { customFetch } from '../utils/axios';
import Spinner from '../components/Spinner';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - (20vh - 12px));
    .verify-container {
        text-align: center;
        a {
            padding: 8px 12px;
        }
    }
    @media (min-width: 768px) {
        min-height: calc(100vh - (20vh - 42px));
    }
`;

export default function VerifyAccountPage() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const verificationToken = queryParams.get('token');
    const email = queryParams.get('email');

    useEffect(() => {
        setIsLoading(true);
        const data = { email, verificationToken };
        customFetch
            .post(`/auth/verify-email`, data)
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setError(true);
            });
    }, []);

    if (error) {
        return (
            <Wrapper>
                <div className="verify-container">
                    <h4>
                        There was an error, please double check your
                        verification link
                    </h4>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {isLoading && <Spinner fullWidth={true} />}
            {!isLoading && (
                <div className="verify-container">
                    <h4>success! Account verified</h4>
                    <Link to={'/login'} className="btn">
                        Go to login
                    </Link>
                </div>
            )}
        </Wrapper>
    );
}
