import React from 'react';
import styled from 'styled-components';

export function PerguntasOpcoes(props) {
    return (
        <div>
            <p>{props.pergunta}</p>
            <select>
                <p>{props.pergunta}</p>
                <option  value={props.opcoes} />
            </select>
        </div>
    )
}

export default PerguntasOpcoes;