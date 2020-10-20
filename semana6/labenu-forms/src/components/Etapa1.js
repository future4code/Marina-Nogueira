import React from 'react';
import styled from 'styled-components';
import PerguntasAbertas from './PerguntasAbertas';
import PerguntasOpcoes from './PerguntasOpcoes';

function Etapa1() {
    return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <PerguntasAbertas pergunta={'1. Qual o seu nome?'} />
        <PerguntasAbertas pergunta={'2. Qual a sua idade?'} />
        <PerguntasAbertas pergunta={'3. Qual seu email?'} />
        <PerguntasOpcoes pergunta={'4. Qual a sua escolaridade?'}
            opcoes={
                ['Ensino Médio Incompleto'],
                ['Ensino Médio Completo'],
                ['Ensino Superior Incompleto'],
                ['Ensino Superior Completo']
            }
        />
    </div>
        
    )
}

export default Etapa1;