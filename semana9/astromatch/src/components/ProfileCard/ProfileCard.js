import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components'
import axios from 'axios';

const Photo = styled.img`
    max-height: 400px;
    max-width: 300px;
    height: auto;
    width; auto;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`

const ButtonsContainer = styled.div`
    display: flex;
`

const BioContainer = styled.div`
    border: 1 px dotted black;
`



function ProfileCard() {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        getProfiles();
    }, [])

    const getProfiles = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
            .then((response) => {
                setProfiles(response.data.profile)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <CardContainer>
                <Photo src={profiles.photo} alt='profile picture' />
                <h4>{profiles.name}, {profiles.age}</h4>
            </CardContainer>
            <BioContainer>
                <p>{profiles.bio}</p>
            </BioContainer>
            <ButtonsContainer>
                <button>NAH</button>
                <button>BÓRA</button>
            </ButtonsContainer>          
        </div>
    )
}

export default ProfileCard