import React from 'react';
import Header from '../components/Header/Header'
import { useProtectPage } from '../hooks/useProtectPage';
import PostDetails from '../components/PostDetails/PostDetails'

const PostScreen = () => {
    useProtectPage()

    return (
        <div>
            <Header />
            <PostDetails />
        </div>
    )
}

export default PostScreen