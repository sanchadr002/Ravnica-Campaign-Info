import React, { useState, useEffect } from 'react'
import CardArt from '../shared/CardArt'
import { scryfallIDSearch } from '../../api/scryfall_search'
import styled from 'styled-components'
import Accordion from '../shared/Accordion'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'

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
        content:
            <AccordionItemText>
                The general requirements for a player character in this campaign are: 
                <br/><br/>
                    <ul>
                        <li>
                            some event in your character's past that's caused them to join the Order (maybe your character saw their guild do something that changed how they 
                            saw the guild/guild system);
                        </li>
                        <br/>
                        <li>
                            a pre-level 3 feat, representing an exceptional ability that would catch the 
                            Order's eye (think about how this has aided your character in their life in getting 
                            to where they are now, either as a guild member or member of the Order);
                        </li>
                        <br/>
                        <li>
                            a guild that your character is a member of (I figure people will naturally want to 
                            choose different guilds from each other but don't be afraid to choose a guild 
                            that's already represented in the party! Each guild has a variety of roles and 
                            archetypes within its ranks); 
                        </li>
                        <br/>
                        <li>
                            three contacts generated from your guild's background in the Ravnica sourcebook 
                            (we can flesh these out together or you can let me do it! I figure they will be 
                            important for both mission purposes and non-Order-related exploration);
                        </li>
                        <br/>
                        <li>
                            and an archetype chosen from below on this page. 
                        </li>
                    </ul>
                    <br/>
                Aside from that, your character's race and class can be anything from the 
                sourcebooks. There's also a fair amount of room for backstory, as your characters 
                should have an established life in both Ravnica and in their guild.
            </AccordionItemText>
    },
    {
        title: 'Guild Info for Characters',
        content: 
            <AccordionItemText>
                Your character belongs to one of the ten guilds of Ravnica. Guild members don't just hang out, 
                they've got jobs to do! When thinking about what guild you'd like your character to be a part 
                of, also consider what their role within the guild is. <br/><br/>
                Your character is unlikely to be at the top of their guild's leadership, but they 
                don't have to be among the bottom rungs. Diversity in guild ranks among the party 
                could lead to some interesting exploration; high ranking characters may be able to 
                go where lower-ranking characters can't, and the inverse is true as well. <br/><br/>
                If you're having trouble choosing a guild for your character, take their 
                personality into account. The curious and expressive might join the Izzet League; 
                the stoic and devoted might join the Orzhov Syndicate; the boisterous and 
                hedonistic might join the Cult of Rakdos. <br/><br/>
                If you're really having a hard time coming up with a character or choosing a guild, come to me 
                and we can talk about it!
            </AccordionItemText>
    },
    {
        title: 'Archetypes Intro',
        content: 
            <AccordionItemText>
                In this campaign, I'd like to use something I'm calling an Archetypes system. Basically, 
                players will choose a primary 'role' and a secondary 'role', and then receive a set of benefits 
                depending on what they've chosen.
                <br/><br/>
                The aim of this is to encourage cool moments of power that highlight the PC and the archetype 
                they're trying to express. Remember, this is still early in its iterations. I'll try and update 
                this as often as possible, and let me know of any feedback you have!
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
                                    Fervor: Once per short rest, as a bonus action, you may cause your next melee 
                                    weapon attack to deal an extra d8 of weapon damage. You gain an amount of 
                                    temporary HP equal to the number rolled plus twice your proficiency bonus.
                                </li>
                                <br/>
                                <li>
                                    Grit: Once per long rest, when you take damage, you may use your reaction to 
                                    increase your AC by an amount equal to your proficiency bonus for the next 
                                    three hits you take.
                                </li>
                            </ul>    
                            <br/>
                            <h4>Support</h4>   
                            <br/>
                            <ul>
                                <li>
                                    Steady Your Mind: Once per short rest, when you or a creature you can see 
                                    within 30ft of you makes a roll to maintain concentration or to resist a fear 
                                    or charm effect, you may use your reaction to grant a bonus to that roll equal 
                                    to your proficiency bonus. Both you and the chosen creature gain temporary HP 
                                    equal to that amount.
                                </li>
                                <br/>
                                <li>
                                    Always There: When a friendly creature you see within 30ft of you takes 
                                    damage, you may use your reaction to immediately move up to 15ft in their 
                                    direction. You may do this a number of times per day 
                                    equal to your proficiency bonus.
                                </li>
                            </ul>
                            <br/>
                            <h4>Ranged</h4>
                            <br/>
                            <ul>
                                <li>
                                    Line Up: As a bonus action, consume half of your maximum movement speed. 
                                    Add 1d4 to the next ranged attack roll you make. You may do this a number 
                                    of times per day equal to your proficiency bonus.
                                </li>
                                <br/>
                                <li>
                                    Keep Away: Once per day, if an enemy would end its turn within 5ft of you, 
                                    you may use your reaction to immediately move up to 5ft away and make a single
                                    ranged attack.
                                </li>
                                <br/>
                            </ul>
                            <h4>Caster</h4>
                            <br/>
                            <ul>
                                <li>
                                    Mystic Efficiency: Once per day, when an enemy succeeds on a saving throw 
                                    for a spell of 3rd level or lower that you cast with a spell slot, if the 
                                    difference between their roll and the spell save DC was less than or equal 
                                    to your proficiency bonus, you may choose to regain the expended spell 
                                    slot. This only works on spells used on one creature.
                                </li>
                                <br/>
                                <li>
                                    Spell Slinger: Once per day, if you used your action to cast a spell of 
                                    first level or higher, you may use your reaction to cast a cantrip as a 
                                    bonus action.
                                </li>
                            </ul>
                            <br/>
                            <h4>DPS</h4>
                            <br/>
                            <ul>
                                <li>
                                    Dice Per Second: Once per short rest, when you roll damage for an attack, 
                                    you may reroll a number of dice equal to your proficiency modifier.
                                </li>  
                                <br/>
                                <li>
                                    Press The Attack: Once per long rest, when you roll damage, you may use your 
                                    reaction to add a an additional number of that damage die equal to your 
                                    proficiency bonus.
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