import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import Header from '../components/Header/Header'
import { useUnprotectedPage } from '../hooks/useUnprotectedPage';

const LoginScreen = () => {
    useUnprotectedPage()
    
    return (
        <div>
            <Header />
            <LoginForm />
        </div>
    )
}

export default LoginScreen