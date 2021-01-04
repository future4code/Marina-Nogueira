import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { BASE_URL } from '../../constants/url';
import { useProtectPage } from '../../hooks/useProtectPage';
import { useRequestData } from '../../hooks/useRequestData';
import PostCard from '../PostCard/PostCard';

const PostDetails = () => {
    useProtectPage()
    const params = useParams()
    const postDetail = useRequestData(`${BASE_URL}/posts/${params.id}`, {})

    console.log(postDetail)

    return (
        <div>
            <PostCard
                
            />
        </div>
    )
}

export default PostDetails