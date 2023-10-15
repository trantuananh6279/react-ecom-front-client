import { useEffect } from 'react';

export default function LoginPage({ setShowNav }) {
    useEffect(() => {
        setShowNav(false);
        return () => {
            setShowNav(true);
        };
    }, [setShowNav]);

    return <div>Login Page</div>;
}
