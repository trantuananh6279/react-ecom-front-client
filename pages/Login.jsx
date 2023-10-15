import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { customFetch } from '../utils/axios';
import { addUserToLocalStorage } from '../utils/localStorage';

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    .login-form {
        width: 92%;
        padding: 1.25rem;
        border: 1px solid #ccc;
        border-top: 4px solid #ab7a5f;
        border-radius: 4px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        h4 {
            margin: 16px 0;
            font-size: 20px;
        }
        .form-control {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            input {
                padding: 10px 12px;
                margin-bottom: 8px;
                border: 1px solid #ccc;
                font-size: 16px;
            }
            .btn {
                padding: 8px 24px;
            }
            a {
                font-size: 14px;
                margin-top: 12px;
                text-align: right;
            }
            span {
                color: #ab7a5f;
                text-decoration: underline;
            }
        }
    }
    @media (min-width: 768px) {
        .login-form {
            width: 450px;
        }
    }
`;

export default function LoginPage({ setShowNav }) {
    const [isMember, setIsMember] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function toggleMember() {
        setIsMember((prev) => !prev);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if ((!name && !isMember) || !email || !password) {
            toast.error('Please fill out all the fields');
            return;
        }
        if (!isMember) {
            register();
            return;
        }
        login();
    }

    async function register() {
        setIsLoading(true);
        await customFetch
            .post(`/auth/register`, { name, email, password })
            .then((res) => {
                setIsLoading(false);
                setIsMember(true);
                setName('');
                setEmail('');
                setPassword('');
                toast.success('Please check your email to verify account');
            })
            .catch((err) => {
                setIsLoading(false);
                toast.error(err?.response?.data?.msg);
            });
    }

    async function login() {
        setIsLoading(true);
        await customFetch
            .post(`/auth/login`, { email, password })
            .then((res) => {
                addUserToLocalStorage(res.data.user);
                setIsLoading(false);
                toast.success(`Welcome ${res.data.user.name}`);
                navigate('/');
            })
            .catch((err) => {
                setIsLoading(false);
                toast.error('Invalid Credentials');
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
                <div className="login-form">
                    <h4 className="title">{isMember ? 'Login' : 'Register'}</h4>
                    <form className="form-control" onSubmit={handleSubmit}>
                        {!isMember && (
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn">
                            {isMember ? 'Login' : 'Register'}
                        </button>
                        <Link onClick={toggleMember}>
                            {isMember
                                ? "Don't have an account? "
                                : ' Already have an account? '}

                            <span>{isMember ? 'Login' : 'Register'}</span>
                        </Link>
                    </form>
                </div>
            )}
        </Wrapper>
    );
}
