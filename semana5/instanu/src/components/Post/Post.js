import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcadorBranco from '../../img/bookmark_border-black-18dp.svg'
import iconeMarcadorPreto from '../../img/bookmark-black-18dp.svg'
import iconeShare from '../../img/share-black-18dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoShare} from '../SecaoShare/SecaoShare'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false
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
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
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

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
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
      </div>
      {componenteComentario}
      {componenteShare}
    </div>
  }
}

export default Post