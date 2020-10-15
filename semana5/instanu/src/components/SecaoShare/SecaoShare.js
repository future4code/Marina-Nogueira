import React, {Component} from 'react'
import './SecaoShare.css'

export class SecaoShare extends Component {
	state = {
		valorInputShare: ""
	}

	onChangeShare = (event) => {
		this.setState({ valorInputShare: event.target.value })
	}
	
	render() {
		return <div className={'share-container'}>
			<input
				className={'input-share'}
				placeholder={'Escreva sua mensagem!'}
				value={this.state.valorInputShare}
				onChange={this.onChangeShare}
			/>
			<button id={'Instagram'} onClick={this.props.aoCompartilhar}>Compartilhar no Instagram</button>
            <button id={'Twitter'} onClick={this.props.aoCompartilhar}>Compartilhar no Twitter</button>
            <button id={'Facebook'} onClick={this.props.aoCompartilhar}>Compartilhar no Facebook</button>
	</div>
	}
}