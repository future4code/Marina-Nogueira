import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { goToPostScreen } from '../../routes/coordinator'

import { Title, HeaderContainer } from './styles';

const Header = () => {
    const history = useHistory()

    return (
        <HeaderContainer>
            <Switch>
                <Route exact path={['/', '/sign-up', '/feed']}>
                    <Title>
                        LabEddit!
                    </Title>
                </Route>
                {/* <Route exact path={`/feed/post/${id}`} >
                    <Title>
                        LabEddt!
                    </Title>
                    <button onClick={() => goToPostScreen(history)} >
                        Feed
                    </button>
                </Route> */}
            </Switch>
        </HeaderContainer>
    )
}

export default Header