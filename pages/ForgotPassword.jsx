import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { customFetch } from '../utils/axios';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 1.25rem;
    .forgot-password {
        width: 100%;
        padding: 1.25rem;
        color: #617d98;
        line-height: 1.25;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        p {
            margin-top: 24px;
        }
        .form-control {
            display: flex;
            flex-direction: column;
            gap: 20px;
            input {
                width: 100%;
                padding: 10px 12px;
                margin-bottom: 8px;
                border: 1px solid #ccc;
                font-size: 16px;
                margin-top: 24px;
            }
            button {
                padding: 8px 12px;
            }
            a {
                text-align: center;
                color: #ab7a5f;
            }
        }
    }
    @media (min-width: 768px) {
        .reset-password {
            width: 450px;
        }
    }
`;

export default function ForgotPasswordPage({ setShowNav }) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!email) {
            toast.error('Please fill out all the fields');
            return;
        }
        setIsLoading(true);
        await customFetch
            .post(`/auth/forgot-password`, { email })
            .then((res) => {
                setIsLoading(false);
                toast.success('Please check your email to reset password');
                navigate('/login');
            })
            .catch((err) => {
                toast.error(err?.response?.data?.msg);
                setIsLoading(false);
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
                <div className="forgot-password">
                    <h4>Reset your password</h4>
                    <p>
                        Enter the email address associated with your account and
                        we'll send you a link to reset your password.
                    </p>
                    <form className="form-control" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="btn">Submit</button>
                        <Link to={'/login'}>Return to sign in</Link>
                    </form>
                </div>
            )}
        </Wrapper>
    );
}
