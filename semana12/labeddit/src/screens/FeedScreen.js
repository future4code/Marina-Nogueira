import React from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header/Header';
import { useProtectPage } from '../hooks/useProtectPage';

const FeedScreen = () => {
    useProtectPage()

    return (
        <div>
            <Header />
            <Feed />
        </div>
    )
}

export default FeedScreen