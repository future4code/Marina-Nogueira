import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FeedScreen from '../screens/FeedScreen';
import PostScreen from '../screens/PostScreen';
import ErrorScreen from '../screens/ErrorScreen';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <LoginScreen />
                </Route>

                <Route exact path={"/sign-up"}>
                    <SignUpScreen />
                </Route>

                <Route exact path={"/feed"}>
                    <FeedScreen />
                </Route>

                {/* <Route 
                // exact path={`/feed/post/${id}`}
                >
                    <PostScreen />
                </Route> */}

                <Route>
                    <ErrorScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router