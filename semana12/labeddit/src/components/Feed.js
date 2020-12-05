import React from 'react';
import { BASE_URL } from '../constants/url';
import { useRequestData } from '../hooks/useRequestData';
import PostCard from './PostCard/PostCard';

const Feed = () => {
    const posts = useRequestData(`${BASE_URL}/posts`, [])

    // useEffect(() => {
    //     const token = localStorage.getItem('token')

    //     axios
    //         .get(`${BASE_URL}/posts`, {
    //             headers: {
    //                 Authorization: token
    //             }
    //         })
    //         .then((response) => {
    //             setPosts(response.data.posts)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })

    // }, [BASE_URL])
    // sem o useRequestData

    console.log(posts)

    return (
        <div>
            {posts.map(post => {
                return (
                    <PostCard 
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        text={post.text}
                        commentsCount={post.commentsCount}
                        id={post.id}
                    />
                )
            })}
        </div>
    )
}

export default Feed