import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FormContainer, Input, Button } from './styles';
import { useForm } from '../../hooks/useForm';
import { signUp } from '../../services/user';

const SignUpForm = () => {
    const history = useHistory()

    const {form, onChange} = useForm({ email:'', password:'', username:'' })

    const handleInputChange = (event) => {
        const {name, value} = event.target

        onChange(name, value)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        signUp(form, history)
    }

    return (
        <div>
            <FormContainer onSubmit={handleSubmission} >
                <Input 
                    name={'username'}
                    value={form.username}
                    placeholder={'Nome de Usuárie'}
                    type={'text'}
                    onChange={handleInputChange}
                />
                <Input 
                    name={'email'}
                    value={form.email}
                    placeholder={'Email'}
                    type={'email'}
                    onChange={handleInputChange}
                />
                <Input 
                    name={'password'}
                    value={form.password}
                    placeholder={'Senha'}
                    type={'password'}
                    onChange={handleInputChange} 
                />
                <Button>Cadastrar</Button>
            </FormContainer>
        </div>
    )
}

export default SignUpForm