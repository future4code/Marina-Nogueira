import React, {Component} from 'react'
import './SecaoShare.css'

export class SecaoShare extends Component {
	state = {
		mensagem: ""
	}

	onChangeShare = (event) => {
		this.setState({ mensagem: event.target.value })
	}
	
	aoCompartilhar = (event) => {
		console.log(`Post compartilhado no ${event.target.id} com a mensagem ${this.state.mensagem}!`)
		this.setState({mensagem: ""})
	  }

	render() {
		return <div className={'share-container'}>
			<input
				className={'input-share'}
				placeholder={'Escreva sua mensagem!'}
				value={this.state.mensagem}
				onChange={this.onChangeShare}
			/>
			<button id={'Instagram'} onClick={this.aoCompartilhar}>Compartilhar no Instagram</button>
            <button id={'Twitter'} onClick={this.aoCompartilhar}>Compartilhar no Twitter</button>
            <button id={'Facebook'} onClick={this.aoCompartilhar}>Compartilhar no Facebook</button>
	</div>
	}
}