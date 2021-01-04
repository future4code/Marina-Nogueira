import axios from 'axios';
import { BASE_URL } from '../constants/url';
import { goToFeedScreen } from '../routes/coordinator';

export const login = (body, history) => {
    axios
        .post(`${BASE_URL}/login`, body)
        .then((response) => {
            console.log(response.data)
            window.localStorage.setItem('token', response.data.token)
            goToFeedScreen(history)
        })
        .catch((error)  => {
            alert('Email e/ou senha inválidos!')
            console.log(error.message)
        })
}

export const signUp = (body, history) => {
    axios
        .post(`${BASE_URL}/signup`, body)
        .then((response) => {
            console.log(response)
            window.localStorage.setItem('token', response.data.token)
            goToFeedScreen(history)
        })
        .catch((error) => {
            console.log(error.message)
        })
}