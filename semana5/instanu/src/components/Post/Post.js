import React from 'react'
import styled from "styled-components"

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcadorBranco from '../../img/bookmark_border-black-18dp.svg'
import iconeMarcadorPreto from '../../img/bookmark-black-18dp.svg'
import iconeShare from '../../img/share-black-18dp.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import {SecaoShare} from '../SecaoShare/SecaoShare'

const DivPostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const DivPostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const DivPostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const ImgUserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const ImgPostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false,
    comentarios: ""
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido
    })
    if(!this.state.curtido) {
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    } else {
        this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1})
      }
  }
  
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      // comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarios: this.props.valorInputComentario
    })
  }

  onClickMarcador = () => {
    this.setState ({
      marcado: !this.state.marcado
    })
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  // aoAdicionarComentario = (event) => {
  //   this.setState({
  //     comentarios: this.props.valorContador
  //   })
  //   // <p>{this.props.valorInputComentario}</p>
  // }

    render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcador

    if(this.state.marcado) {
      iconeMarcador = iconeMarcadorPreto
    } else {
      iconeMarcador = iconeMarcadorBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteShare

    if(this.state.compartilhando) {
      componenteShare = <SecaoShare aoCompartilhar={this.aoCompartilharPost} />
    }

    let componenteComentarioPublicado

    if(this.state.comentarios) {
      componenteComentarioPublicado = <SecaoComentario aoAdicionar={this.aoAdicionarComentario} />
    }

    return <DivPostContainer>
      <DivPostHeader>
        <ImgUserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </DivPostHeader>

      <ImgPostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <DivPostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeMarcador}
          onClickIcone={this.onClickMarcador}
        />  

        <IconeComContador
          icone={iconeShare}
          onClickIcone={this.onClickShare}
        />
      </DivPostFooter>
      {componenteComentario}
      {componenteShare}
      {componenteComentarioPublicado}
    </DivPostContainer>
  }
}

export default Post