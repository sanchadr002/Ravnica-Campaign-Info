import React, { useState } from 'react'
import styled from 'styled-components'

// Home will serve as a landing area for users
    // Will include a brief intro to set the tone and context of the campaign
    // Should include a night image of Ravnica for visual flair
    // Will include a brief blurb from me (the DM) about my excitement and experience, create, and provide

// Creating our styled components using the styled-components framework
const Title = styled.h1({
    fontSize: '1.5em',
    textAlign: 'center',
    color: 'palevioletred'
})

const Wrapper = styled.section({
    padding: '4em',
    background: 'papayawhip'
})

const Home = (props) => {
        
    // Pulling the first image we'll show from state and creating the hook
    const [introImage, setIntroImage] = useState(null)

    return (
        <Wrapper>
            <Title>Woo Ravnica campaign!</Title>
        </Wrapper>
    )
}

export default Home