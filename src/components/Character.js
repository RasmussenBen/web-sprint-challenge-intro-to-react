// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
    const { data } = props;
    
    return (
        <StyledCharacter>
            <div className='characterName'>
                <h2>{data.name}</h2>
            </div>
            <div className='characterDetails'>
                <p>Gender: {data.gender}</p>
                <p>Height: {data.height}</p>
                <p>Mass: {data.mass}</p>
                <p>Birth Year: {data.birth_year}</p>
                <p>Eye Color: {data.eye_color}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Skin Color: {data.skin_color}</p>
            </div>
        </StyledCharacter>
    )
}