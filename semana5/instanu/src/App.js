import React from 'react';
import './App.css';
import styled from "styled-components";
import Post from './components/Post/Post';

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
    ]
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
      <div className={'app.container'}>
        {arrayDeComponentes}
      </div>
    );
  }
}

export default App;
