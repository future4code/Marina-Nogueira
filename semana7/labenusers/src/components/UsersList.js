import React from 'react';
import axios from 'axios';

class UsersList extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.getAllUsers();
    };

    getAllUsers = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            {headers: {
                Authorization: 'marina-azzi-nogueira-dumont'
            }})
            .then((response) => {
                this.setState({
                    users: response.data.result.list
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    render() {
        const renderedUsersList = this.state.users.map((user) => {
            return <p key={user.id}>{user.name} | {user.email}</p>
        })

        return(
            <div>
                <button>Ir para cadastro</button>
                LISTA
            </div>
        )
    }
}

export default UsersList