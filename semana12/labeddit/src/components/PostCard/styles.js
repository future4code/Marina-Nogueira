import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    width: 30vw;
`

export const UsernameContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VotesContainer = styled.div`
    display: flex;
`

export const VoteCommentsContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 30vw;
    margin-bottom: 20px;
`

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    padding: 8px 0;
    width: 30vw;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CommentsInput = styled.textarea`
    width: 25vw;
    height: 10vw;
    margin-bottom: 8px;
`