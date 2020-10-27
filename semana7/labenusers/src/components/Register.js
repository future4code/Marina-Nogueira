import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

// const RegisterDiv = styled.div`
//     display: flex;
//     flex-direction: column;

// `

// const Buttons = styled.button`
//     display: inline;
// `

class Register extends React.Component {
    state = {
        nameValue:"",
        emailValue: ""
      }
    
      goesToUsersList = () => {
        this.setState({
          registerPage: false
        })
      }
      
      onChangeName = (event) => {
        this.setState({ nameValue: event.target.value})
      }
    
      onChangeEmail = (event) => {
        this.setState({ emailValue: event.target.value})
      }

      createUser = () => {
        // const body = {
        //     name: this.state.nameValue,
        //     email: this.state.emailValue
        // };

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
            {headers: {
                Authorization: 'marina-azzi-nogueira-dumont'
            }})
            .then((response) => {
                this.setState({ nameValue: '' , emailValue: ''})
                alert('Cadastro realizado com sucesso!')
            })
            .catch((error) => {
                alert('Houve um problema, tente novamente!')
            })
      }
    
    render() {
        return(
            <div>
                <button onClick={this.goesToUsersList}>Ver Lista de Users</button>
                <h2>Cadastro</h2>
                <label>
                    <p>Nome</p>
                    <input 
                      onChange={this.onChangeName} 
                      value={this.state.nameValue} 
                    />
                    <p>Email</p> 
                    <input 
                      onChange={this.onChangeEmail}
                      value={this.state.emailValue}
                    />
                </label>
                <button onClick={this.createUser}>Salvar</button>
            </div>
        )
    }
}

export default Register