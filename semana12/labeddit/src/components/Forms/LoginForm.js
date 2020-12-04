import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useForm } from '../../hooks/useForm';
import { goToSignUpScreen } from '../../routes/coordinator';
import { login } from '../../services/user';
import { FormContainer, Input, Button, FormDiv } from './styles';

const LoginForm = () => {
    const history = useHistory()
    
    const {form, onChange, resetForm} = useForm({ email:'', password:'' })

    const handleInputChange = (event) => {
        const {name, value} = event.target

        onChange(name, value)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
        resetForm()
    }
    
    return (
        <FormDiv>
            <FormContainer onSubmit={handleSubmission} >
                <Input 
                    name={'email'}
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder={'Email'}
                    type={'email'}
                />
                <Input 
                    name={'password'}
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder={'Senha'}
                    type={'password'}
                />
                <Button>Entrar</Button>
            </FormContainer>
            <Button onClick={() => goToSignUpScreen(history)}>Cadastrar</Button>
        </FormDiv>
    )
}

export default LoginForm