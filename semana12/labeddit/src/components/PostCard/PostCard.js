import React from 'react';
import { CommentsContainer, CommentsInput, Container, PostContainer } from './styles';

const PostCard = () => {
    return (
        <Container>
            <PostContainer>
                <p>Nome de Usuárie</p>
                <p>Texto do post</p>
                <p>X comentários</p>
            </PostContainer>

            <CommentsContainer>
                <CommentsInput placeholder={'Escreva seu comentário'} />
                <button>Comentar</button>
            </CommentsContainer>
        </Container>
    )
}

export default PostCard