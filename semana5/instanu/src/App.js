import React from 'react';
import './App.css';
import styled from "styled-components";
import Post from './components/Post/Post';

const EstilizacaoInputs = styled.input`
  margin: 5px 0;
`
const BotaoAdicionar = styled.button`
  margin-bottom: 10px;
  font-weight: bold;
`

class App extends React.Component {
  state = {
    arrayPosts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?a1",
        fotoPost: "https://picsum.photos/200/150?a1",
      },
      {
        nomeUsuario: "caio",
        fotoUsuario: "https://picsum.photos/50/50?a2",
        fotoPost: "https://picsum.photos/200/150?a2",
      },
      {
        nomeUsuario: "lais",
        fotoUsuario: "https://picsum.photos/50/50?a3",
        fotoPost: "https://picsum.photos/200/150?a3",
      }
    ],
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value})
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoArrayPosts = [ novoPost, ...this.state.arrayPosts];

    this.setState({ arrayPosts: novoArrayPosts});

    this.setState({ valorInputNome: ""});
    this.setState({ valorInputFotoUsuario: ""});
    this.setState({ valorInputFotoPost: ""})
  }
  
  render() {
    const arrayDeComponentes = this.state.arrayPosts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
         fotoPost={post.fotoPost}
        />
      )
    })
    return (
      <div className={'app-container'}>
        <EstilizacaoInputs
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />
        <EstilizacaoInputs
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Link da Foto de Usuárie"}
        />
        <EstilizacaoInputs
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Link da Foto do Post"}
        />
        <BotaoAdicionar onClick={this.adicionaPost}>Adicionar Post!</BotaoAdicionar>
        {arrayDeComponentes}
      </div>
    );
  }
}

export default App;
