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

const AccordionItemText = styled.p({
    fontSize: '1em',
    color: 'honeydew',
    padding: '1em'

})

const Container = styled.div({
    background: 'darkslategray',
    height: '90vh',
    display: 'flex-box'
})

const AccordionUnorderedList = styled.ul({
    listStylePosition: 'inside',
    padding: '1em'
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
        content: <AccordionItemText>In this campaign, I'd like to use something I'm calling an Archetypes 
        system. Basically, players will choose a primary 'role' and a secondary 'role', and then receive a set 
        of benefits depending on what they've chosen.<br/><br/>The aim of this is to encourage cool moments of power that highlight the PC and the archetype they're trying to express. Remember, this is still early in its iterations. I'll try and update this as often as possible, and let me know of any feedback you have!
        </AccordionItemText>
    },
    {
        title: 'Choosing your Archetype',
        content: 
            <AccordionItemText>
                Your archetype will have a Primary and Secondary role chosen from Melee, 
                Support, Ranged, Caster, DPS. The roles you choose have to be different from each other. Your 
                choice for Primary grants two bonuses, while your choice for secondary grants one of two 
                bonuses.
                <br/>   
                <br/>
                <h3>Primary</h3>
                    <AccordionUnorderedList>
                        <h4>Melee</h4>
                        <br/>
                            <ul>
                                <li>
                                    Grit: Once per short rest, when you 
                                    take damage while within 5ft of a hostile creature, you may reduce the damage taken by an amount equal 
                                    to your constitution modifier + your proficiency bonus.
                                </li>
                                <br/>
                                <li>
                                    Fervor: During your first turn of 
                                    initiative, your movement speed is increased by 5ft.
                                </li>
                            </ul>    
                            <br/>
                            <h4>Support</h4>   
                            <br/>
                            <ul>
                                <li>
                                    Steady Mind: You may add your proficiency bonus to rolls made to maintain concentration and rolls to resist fear and charm effects.
                                </li>
                                <br/>
                                <li>
                                    Always There: When a friendly creature you see within 30ft of you drops to 1/4 or less of their maximum HP, you may use your reaction to immediately move 10ft in their direction. You may do this a number of times per day equal to your proficiency bonus.
                                </li>
                            </ul>
                            <br/>
                            <h4>Ranged</h4>
                            <br/>
                            <ul>
                                <li>
                                    Line Up: As a bonus action, consume half of your maximum movement speed. Add half of your proficiency bonus, rounded down, to the next ranged attack roll you make. You may do this a number of times per day equal to your proficiency bonus.
                                </li>
                                <br/>
                                <li>
                                    Keep Away: Once per day, if an enemy would end its turn within 5ft of you, you may use your reaction to immediately move up to 5ft away and make a ranged attack.
                                </li>
                                <br/>
                            </ul>
                            <h4>Caster</h4>
                            <br/>
                            <ul>
                                <li>
                                    Mystic Efficiency: Once per day, when an enemy succeeds on a saving throw for a spell of 3rd level or lower that you cast with a spell slot, if the difference between their roll and the spell save DC was less than or equal to your proficiency bonus, you may choose to regain the expended spell slot.
                                </li>
                                <br/>
                                <li>
                                    Spell Slinger: Once per day, if you used your action to cast a spell of first level or higher, you may use your reaction to cast a cantrip as a bonus action.
                                </li>
                            </ul>
                            <br/>
                            <h4>DPS</h4>
                            <br/>
                            <ul>
                                <li>
                                    Dice Per Second: When you roll damage for an attack, you may reroll one die. You may use either roll for the final result. You may do this a number of times per day equal to your proficiency bonus.
                                </li>  
                                <br/>
                                <li>
                                    Press The Attack: Once per short rest, you may add your proficiency bonus to an attack roll made against an enemey if you attacked it on your previous turn.
                                </li>
                            </ul>
                        </AccordionUnorderedList>
            </AccordionItemText>
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