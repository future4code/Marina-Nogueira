import React from 'react';
import { CommentsContainer, CommentsInput, Container, PostContainer, UsernameContainer, TextContainer, VoteCommentsContainer, VotesContainer } from './styles';
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';
import { goToPostScreen } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'


const PostCard = (props) => {
    const history = useHistory()

    return (
        <Container>
            <PostContainer onClick={() => goToPostScreen(history, props.id)}>
                <UsernameContainer>
                    <p>{props.username}</p>
                </UsernameContainer>
                <TextContainer>
                    <p>{props.text}</p>
                </TextContainer>
            </PostContainer>
            <VoteCommentsContainer>
                <VotesContainer>
                    <img src={arrowUp} alt={'seta para cima'} />
                    <p>0</p>
                    <img src={arrowDown} alt={'seta para baixo'} />
                </VotesContainer>
                    <p>{props.commentsCount} comentários</p>
            </VoteCommentsContainer>
                
            {/* <CommentsContainer>
                <CommentsInput placeholder={'Escreva seu comentário'} />
                <button>Comentar</button>
            </CommentsContainer> */}
        </Container>
    )
}

export default PostCard