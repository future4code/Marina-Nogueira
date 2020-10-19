import React from 'react';
import styled from 'styled-components';

function Etapa1() {
    return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome?</p>
        <input />
        <p>2. Qual a sua idade?</p>
        <input />
        <p>3. Qual seu email?</p>
        <input />
        <p>4. Qual a sua escolaridade?</p>
        <select>
                {/* //  onChange={this.handleSelectChange} */}
                <option value='medio incompleto'>Ensino Médio Incompleto</option>
                <option value='medio completo'>Ensino Médio Completo</option>
                <option value='superior incompleto'>Ensino Superior Incompleto</option>
                <option value='superior completo'>Ensino Superior Completo</option>
        </select>
       
        
    </div>
        
    )
}

export default Etapa1;