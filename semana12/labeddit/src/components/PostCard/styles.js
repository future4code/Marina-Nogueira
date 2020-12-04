import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    margin-bottom: 12px;
    width: 30vw;
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