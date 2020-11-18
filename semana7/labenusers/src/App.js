import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UsersList from './components/UsersList';
import Register from './components/Register';

const AppContainer = styled.div`
  margin-left: 15px;
`

class App extends React.Component {
  state = {
    registerPage: true
  };
  
  // goesToUsersList = () => {
  //   this.setState({
  //     registerPage: false
  //   })
  // }

  render() {
   const renderedPage = () => {
     if (this.state.registerPage) {
       return <Register />
     } else {
        return <UsersList />
     }  
    }
    return (
      <AppContainer>
        {renderedPage()}
      </AppContainer>
    );
  }
  
}

export default App;
