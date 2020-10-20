import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Agradecimento from './components/Agradecimento';
import styled from 'styled-components';

const DivEstilizada = styled.div `
  text-align: center;
`

const Botao = styled.button `
  margin-top: 20px;
`

export class App extends React.Component {
  state = {
    etapa: 1,
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Agradecimento />;
      default:
        return <div></div>;
    }
  }

  irParaProximaEtapa = () => {
    const proximaEtapa = this.state.etapa + 1

    this.setState({ etapa: proximaEtapa})
  }
  
  render() {
    return (
      <DivEstilizada>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 && 
          <div>
            <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>
          </div> 
        }
      </DivEstilizada>
    )
  }
}

export default App;
