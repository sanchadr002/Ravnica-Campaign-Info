import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { scryfallIDSearch } from '../api/scryfall_search'
import CardArt from './shared/CardArt'

// Home will serve as a landing area for users
    // Will include a brief intro to set the tone and context of the campaign
    // Should include a night image of Ravnica for visual flair
    // Will include a brief blurb from me (the DM) about my excitement and experience, create, and provide

// Creating our styled components using the styled-components framework
const Title = styled.h1({
    fontSize: '3em',
    textAlign: 'left',
    color: 'darkslateblue'
})

const Wrapper = styled.section({
    padding: '3em',
    background: 'papayawhip',
    height: '100vh',
})

const Header = styled.h2({
    fontSize: '2em',
    textAlign: 'left',
    color: 'honeydew',
    padding: '1em'
})

const Container = styled.div({
    background: 'darkslategray',
    height: '50rem',
    display: 'flex-box'
})

const Paragraph = styled.p({
    padding: '1em',
    background: 'darkslategray',
    color: 'honeydew',
    textAlign: 'left',
    fontSize: '1.5em'
})

const Home = () => {
        
    // Pulling the first image we'll show from state and creating the hook
    const [imageURL, setImageURL] = useState(null)

    useEffect(() => {
        scryfallIDSearch("29bfbf3e-3a6c-40d4-8e1b-255f429de6cc")
            .then(cardObj => {
                setImageURL(cardObj.image_uris.art_crop)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Wrapper>
            <Title>Welcome to Ravnica: Order of the Guildpact</Title>
            <Container>
                <Header>
                    "You step out of the shadow ...
                </Header>
                <Paragraph>
                    And into the moonlit night. The city below you nearly disappears into darkness as you watch from the spires above. A bridge in the Griffin Heights neighborhood is the perfect place for shady figures to meet and be ignored. The Azorius always were poor at finding stinks right under their own noses.
                <CardArt imageURL={imageURL} />
                </Paragraph>
                <Paragraph>
                    As you approach the bridge, you spot the familiar cloaked white masks. Even after all this time, the sight of even your own mask makes your heart skip. What would your guild do if they knew one of their own is a member of the infamous Order? The thought has passed through your head countless times, but the time to turn back is long gone.
                </Paragraph>
                <Paragraph>
                    Balance is your goal now. Balance is how this world you call 'home' can exist. Balance is what you fight for. Another mission begins ..."
                </Paragraph>
                <Paragraph>
                    <small>
                        Welcome to Ravnica everyone! I'm so excited to be running a campaign set in a place rife with action and subterfuge. I love this setting as both a Magic: The Gathering world and a D&D setting. With this campaign, I'm hoping to put together a fun, collaborative narrative that seamlessly threads together the players' characters, what the players think is interesting about Ravnica, and what I love about the plane. Feel encouraged to ask me any questions at all about Ravnica and/or the campaign! --Adrian
                    </small>
                </Paragraph>
            </Container>
        </Wrapper>
    )
}

export default Home