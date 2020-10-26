import React from 'react';
import styled from 'styled-components';
import PerguntasOpcoes from './PerguntasOpcoes';

export function PerguntasAbertas(props) {
    return(
        <div>
            <p>{props.pergunta}</p>
            <input value={props.valorInput} />
        </div>
    )
}

export default PerguntasAbertas;
