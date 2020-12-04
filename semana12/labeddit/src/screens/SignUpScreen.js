import React from 'react';
import SignUpForm from '../components/Forms/SignUpForm';
import Header from '../components/Header/Header';
import { useUnprotectedPage } from '../hooks/useUnprotectedPage';

const SignUpScreen = () => {
    useUnprotectedPage()

    return (
        <div>
            <Header />
            <SignUpForm />
        </div>
    )
}

export default SignUpScreen