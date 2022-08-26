import React, { useState, useEffect } from 'react'
import CardArt from '../shared/CardArt'
import { scryfallIDSearch } from '../../api/scryfall_search'
import styled from 'styled-components'
import Accordion from '../shared/Accordion'

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

const LineItem = styled.li({
    marginLeft: '2rem'
})

const Header = styled.h2({
    fontSize: '2em',
    textAlign: 'left',
    color: 'honeydew',
    padding: '1em'
})

const Container = styled.div({
    background: 'darkslategray',
    height: '90vh',
    display: 'flex-box'
})

const Paragraph = styled.p({
    padding: '1em',
    background: 'darkslategray',
    color: 'honeydew',
    textAlign: 'left',
    fontSize: '1.5em'
})

const CharacterCreationHome = () => {
    return(
        <>
            <Wrapper>
                <Title>Character Creation Details</Title>
                <Container>
                    <Header>General Points</Header>
                        <Paragraph>
                            The general requirements for a player character in this campaign are: <br/><br/>
                                <LineItem>
                                    some event in your character's past that's caused them to fight for balance 
                                    among the guilds
                                </LineItem><br/>
                                <LineItem>
                                    a pre-level 3 feat, representing an exceptional ability that would catch 
                                    the Order's eye
                                </LineItem><br/>
                                <LineItem>
                                    a guild that your character is a member of
                                </LineItem><br/>
                                <LineItem>
                                    three contacts generated from your guild's background in the Ravnica
                                    sourcebook (you can flesh these out more yourself or let me do it!)
                                </LineItem><br/>
                                <LineItem>
                                    one non-contact NPC that is important to your character in some way
                                </LineItem><br/>
                                <LineItem>
                                    an archetype chosen from below on this page
                                </LineItem><br/>
                            Aside from that, your character's race and class can be anything from the 
                            sourcebooks. There's also a fair amount of room for backstory, as your characters 
                            should have an established life in both Ravnica and in their guild.
                        </Paragraph>
                    <Header>Guild Info for Characters</Header>
                        <Paragraph>
                            Your character belongs to one of the ten guilds of Ravnica. Life among the guilds 
                            is very different; Azorius elocutors act as scribes for bustling senators; Golgari 
                            retrievers sift through waste in the Undercity, searching for objects of value; 
                            Boros soldiers train day in and day out to prepare for any threat that may emerge.
                        </Paragraph>
                        <Paragraph>
                            Your character is unlikely to be at the top of their guild's leadership, but they 
                            don't have to be among the bottom rungs. Diversity in guild ranks among the party 
                            could lead to some interesting exploration; high ranking characters may be able to 
                            go where lower-ranking characters can't, and the inverse is true as well.
                        </Paragraph>
                        <Paragraph>
                            If you're having trouble choosing a guild for your character, take their 
                            personality into account. The curious and expressive might join the Izzet League; 
                            the stoic and devoted might join the Orzhov Syndicate; the boisterous and 
                            hedonistic might join the Cult of Rakdos. If you're having any trouble coming up 
                            with a character or choosing a guild, come to me and we can talk about it!
                        </Paragraph>
                </Container>
            </Wrapper>
        </>
    )
}

export default CharacterCreationHome