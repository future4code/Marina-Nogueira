import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { goToFeedScreen } from '../../routes/coordinator'

import { Title, HeaderContainer, ButtonFeedPage, ButtonFeedHeaderContainer } from './styles';

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
                <Route exact path={'/feed/posts/:id'}>
                    <ButtonFeedHeaderContainer>
                        <Title>
                            LabEddit!
                        </Title>
                        <ButtonFeedPage onClick={() => goToFeedScreen(history)} >
                            Feed
                        </ButtonFeedPage>
                    </ButtonFeedHeaderContainer>
                </Route>
            </Switch>
        </HeaderContainer>
    )
}

export default Header