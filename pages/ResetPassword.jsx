import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { customFetch } from '../utils/axios';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 1.25rem;
    .reset-password {
        width: 100%;
        padding: 1.25rem;
        color: #617d98;
        line-height: 1.25;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        .form-control {
            display: flex;
            flex-direction: column;
            gap: 20px;
            input {
                width: 100%;
                padding: 10px 12px;
                border: 1px solid #ccc;
                font-size: 16px;
            }
        }
    }
    @media (min-width: 768px) {
        .reset-password {
            width: 450px;
        }
    }
`;

export default function ResetPasswordPage({ setShowNav }) {
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const passwordToken = queryParams.get('token');
    const email = queryParams.get('email');

    async function handleSubmit(e) {
        e.preventDefault();
        if (!password || !confirmPassword) {
            toast.error('Please fill out all the fields');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        const data = { email, passwordToken, password };
        await customFetch
            .post(`/auth/reset-password`, data)
            .then((res) => {
                setIsLoading(true);
                toast.success('Success! Password reset');
                navigate('/login');
            })
            .catch((err) => {
                setIsLoading(false);
                toast.error(err?.response?.data?.msg);
            });
    }

    useEffect(() => {
        setShowNav(false);
        return () => {
            setShowNav(true);
        };
    }, [setShowNav]);

    return (
        <Wrapper>
            {isLoading && <Spinner fullWidth={true} />}
            {!isLoading && (
                <div className="reset-password">
                    <h4>Reset your password</h4>
                    <form className="form-control" onSubmit={handleSubmit}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button className="btn">Submit</button>
                    </form>
                </div>
            )}
        </Wrapper>
    );
}
