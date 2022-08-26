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

const accordionData = [
    {
        title: 'General Points',
        content: `The general requirements for a player character in this campaign are: some 
        event in your character's past that's caused them to fight for balance among the guilds (maybe your 
        character saw their guild do something that changed how they saw the guild/guild system); 
         a pre-level 3 feat, representing an exceptional ability that would catch the Order's eye (think 
        about how this has aided your character in their life in getting to where they are now, either as a 
        guild member or member of the Order); a guild that your character is a member of (I 
        figure people will naturally want to choose different guilds from each other but don't be afraid to 
        choose a guild that's already represented in the party! Each guild has a variety of roles and 
        archetypes within its ranks); three contacts generated from your guild's background in 
        the Ravnica sourcebook (you can flesh these out more yourself or let me do it! and I figure they will 
        be important for both mission purposes and non-Order-related exploration); one 
        non-contact NPC that is important to your character in some way; and an archetype chosen from below on 
        this page. Aside from that, your character's race and class can be anything from the 
        sourcebooks. There's also a fair amount of room for backstory, as your characters 
        should have an established life in both Ravnica and in their guild.`
    },
    {
        title: 'Guild Info for Characters',
        content: `Your character belongs to one of the ten guilds of Ravnica. Life among the guilds 
        is very different; Azorius elocutors act as scribes for bustling senators; Golgari 
        retrievers sift through waste in the Undercity, searching for objects of value; 
        Boros soldiers train day in and day out to prepare for any threat that may emerge. 
        Your character is unlikely to be at the top of their guild's leadership, but they 
        don't have to be among the bottom rungs. Diversity in guild ranks among the party 
        could lead to some interesting exploration; high ranking characters may be able to 
        go where lower-ranking characters can't, and the inverse is true as well. 
        If you're having trouble choosing a guild for your character, take their 
        personality into account. The curious and expressive might join the Izzet League; 
        the stoic and devoted might join the Orzhov Syndicate; the boisterous and 
        hedonistic might join the Cult of Rakdos. If you're really having a hard time coming up 
        with a character or choosing a guild, come to me and we can talk about it!`
    },
    {
        title: 'Archetypes Intro',
        content: `I've been really inspired with exploring and expressing different PC archetypes after playing lots of Elden Ring (haha). As such, I'd like to use this campaign to introduce an Archetypes system that I'll use in future campaigns. The aim of this is to help players who might have more niche archetypes that aren't as supported by official material (plus I love creating a problem to solve, what can I say?) `
    },
    {
        title: 'Choosing your Archetype',
        content: `In its current iteration, players will choose a Primary quality and a Secondary quality from 
        the following: Strong, Quick, Hearty, Mindful. Characters will get buffs to theirs stats depending on 
        their combination of qualities. At the end, characters will receive a mini-feat and a -1 point to their 
        stats. When choosing your qualities, consider how your character approaches the 
        challenges they face. Do they confront things head-on and with confidence? Maybe they're Strong/Hearty. 
        Is your character more about thinking on the fly and using information? Consider Mindful/Quick. Primary: Strong: Add +2 points to your 
        primary damage stat" Quick: Add +1 to your AC and +1 to your 
        Dexterity. Hearty: Add +2 to your Constitution Mindful: Add +2 distributed as you choose among Intelligence and Wisdom Secondary: Strong: Add +1 point to your 
        primary damage stat Quick: Add +1 to your AC Hearty: Add +1 point to your Constitution  
         Mindful: Add +1 point to your Intelligence or Wisdom Archetype Ability: Choose an ability and negative stat point based on 
        your Primary quality. Strong: Your power is capable of inspiring fear 
        and awe in those who witness it: you may add your proficiency bonus to intimidation and persuasion 
        checks made with displays of ability. Your focus on nurturing your power comes at a cost: subtract a 
        point from one of your stats. Quick: Your talent for speed gets 
        you to where you need to be: increase your movespeed by +5. Always walking with a spring in your step 
        makes keeping steady a bit difficult: subtract one point from your Strength or Constitution. Hearty: Some might say that 'composure' is your middle name: you may add 
        your proficiency bonus to rolls made to maintain concentration on a spell or ability, and to rolls made 
        against fear and charm effects. . A substantial presence doesn't always guarantee ability: subtract 
        one point from Strength, Dexterity, Intelligence, or Wisdom . Mindful: 
        Your less direct approach to situations provides a distinct advantage: while in initiative, you may use 
        a bonus action to consume all of your movement and observe an individual; you may add your proficiency 
        bonus to the next check made against the observed target. All that time spent being aware is time not 
        spent pumping iron: subtract one point from your Strength, Dexterity, or Constitution.`
    }
]
const CharacterCreationHome = () => {
    return(
        <>
            <Wrapper>
                <Title>Character Creation Details</Title>
                <Container>
                    <Header>Your Character</Header>
                    <Paragraph>
                        Here, you'll find information relevant to creating your character. I've listed some 
                        information necessary for character backgrounds, what life can look like for guild 
                        member characters, and my archetype system. I'll continue adding to this section over 
                        time as I refine more aspects of the setting.
                    </Paragraph>
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content}/>
                    ))}
                </Container>
            </Wrapper>
        </>
    )
}

export default CharacterCreationHome