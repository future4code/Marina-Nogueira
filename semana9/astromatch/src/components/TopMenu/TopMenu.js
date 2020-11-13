import React from 'react';

function TopMenu(props) {
    return(
        <div>
            <h3>astromatch</h3>
            <button onClick={props.onClickChangeScreen}>trocar de tela</button>
            <button onClick={props.onClickClear}>resetar swipes e matches</button>
        </div>
    )
}

export default TopMenu