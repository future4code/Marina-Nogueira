import React from 'react';
import Header from '../components/Header/Header';
import PostCardList from '../components/PostCardList';
import { useProtectPage } from '../hooks/useProtectPage';

const PostScreen = () => {
    useProtectPage()

    return (
        <div>
            <Header />
            <PostCardList />
        </div>
    )
}

export default PostScreen