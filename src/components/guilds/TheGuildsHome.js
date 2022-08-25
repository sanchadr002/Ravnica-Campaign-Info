import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardArt from '../shared/CardArt'
import { scryfallIDSearch } from '../../api/scryfall_search'
import Accordion from '../shared/Accordion'

const Title = styled.h1({
    fontSize: '3em',
    textAlign: 'left',
    color: 'darkslateblue'
})

const Wrapper = styled.section({
    padding: '3em',
    background: 'papayawhip',
    height: '100rem',
})

const Header = styled.h2({
    fontSize: '2em',
    textAlign: 'left',
    color: 'honeydew',
    padding: '1em'
})

const Container = styled.div({
    background: 'darkslategray',
    height: '90rem',
    display: 'flex-box'
})

const Paragraph = styled.p({
    padding: '1em',
    background: 'darkslategray',
    color: 'honeydew',
    // textAlign: 'left',
    fontSize: '1.5em'
})

const TheGuildsHome = () => {

    const [imageURL, setImageURL] = useState(null)

    useEffect(() => {
        scryfallIDSearch("d1022d41-c1d0-42bf-b3e5-d6fb02d47119")
            .then(cardObj => {
                setImageURL(cardObj.image_uris.art_crop)
            })
            .catch(err => console.log(err))
    })

    const accordionData = [
        {
            title: 'Azorius Senate',
            content: `The Azorius Senate champions its extensive legal code as the barrier between society and 
            chaos. It currently has no formal guildmaster, as its last, Isperia, was assassinated prior to the 
            events of War of the Spark.\n 
            The Senate is supported by three branches (refered to as "columns"), each led by an arbiter, who in 
            turn is a part of the "Triumvirate", which advises the guildmaster. The three columns are as 
            follows: the Sova Column, a body acting as a judicial branch; the Jelenn Column, a body acting as a 
            legislative branch; and the Lyev Column, the executive branch which acts as a police force.`
        },
        {
            title: 'Boros Legion',
            content: `The Boros Legion combines the forces of law and military strength to forge Ravnica into a 
            safe and just society for all. Its current guildmaster is the angel Aurelia.\n The Legion has a 
            rigid hierarchy, at the top of which sit many angels. These celestial beings act mostly as holy 
            warriors and advisors in leadership roles. For its military force, the guildmaster has Commanders, 
            who wield larger units each led by Captains. These Captains lead smaller garrisons. Even further 
            within this hierarchy are groups of soldiers who specialize in certain forms of battle, known as 
            Skyknights, Wojeks, Sunhome Guards, and Firefists.`
        },
        {
            title: 'House Dimir',
            content: `House Dimir is the most secretive out of all the guilds. Its mere existence is doubted by 
            the populace at large. The guild masquerades as respectable messengers and reporters, while in 
            truth being an association acting as a network of spies and assassins. Its first guildmaster was 
            the vampire Szadek, who ruled the guild for 10,000 years until he was arrested and killed in the 
            turmoil of the Decamillennial Celebration. House Dimir does not have official ranks, with competence and information in the guild instead being rewarded with missions of increasing importance. Its current guildmaster, Lazav, considers those with who've gathered considerable amounts of secrets to be worthy of acting as counsel.`
        },
        {
            title: 'Golgari Swarm',
            content: `The Golgari Swarm acts as Ravnica's waste management system. It celebrates the vibrancy of life, but gives an equal amount of attention to nature's facets of rot, death, and destruction. Vraska, the Swarm's current guildmaster, is a reclusive gorgon who has recently returned after a decades' long absence. Progressing up the ranks does not quite exist among the Golgari. Your renown within the guild is essentially a direct measure of the guildmasters' knowledge of you, her confidence in your abilities, and her interest in your activities.`
        },
        {
            title: 'Gruul Clans',
            content: `The Gruul Clans are a disparate collection of groups who inhabit the wild areas of Ravnica, well as abandoned zones and ruins. They see civilization as a source of weakness, and work towards tearing it down to restore the true order of nature. The guildmaster of the Clans is the cyclops Barzygmas, who seized the position by beating out all other competitors after the guild's last leader was killed during the events of the War of the Spark. Ranks do not formally exist among the Gruul. Renown within the Clans could also be called glory -- strength and power in battle is rewarded with the respect of your peers, and the acceptance of your leadership.`
        },
        {
            title: 'Izzet League',
            content: `The Izzet League exists as both a scientific institution, and Ravnica's infrastructure management system. The League prioritizes discovery and experimentation, with many of its members having shorter attention spans. Its current guildmaster, Ral Zarek, leads the guild after a brief decades-long absence nearly a century ago. Ranks within the league are determined by quality of results, with higher renown rewarded with more access to teams of researchers and resources.`
        },
        {
            title: 'Orzhov Syndicate',
            content: `To the Orzhov Syndicate, wealth is power. The guild wields money, debt, and faith to 
            operate as a crime family while maintaing the facade of a religious institution. The Orzhov value 
            structure, and so, they have a rigid hierarchy. All members start at the bottom, with renown 
            requiring devotion and debt collecting.`
        }
    ]

    return (
        <Wrapper>
            <Title>The Ten Guilds of Ravnica</Title>
            <Container>
                <Paragraph>
                    The world of Ravnica is ruled by ten guilds who make up the foundation of its society. These guilds are different from those found in most D&D worlds, and make up the vast majority of most people's lives.
                    <CardArt imageURL={imageURL}/>
                </Paragraph>
                <Paragraph>
                    The guilds have stark differences between them, but all still work together to keep society functioning. From government and military functions (Azorius Senate and Boros Legion), to medicine and infrastructure (Simic Combine and Izzet League), and even to entertainment and waste disposal (Cult of Rakdos and Golgari Swarm), the guilds all have their place in the world.
                </Paragraph>
                <Paragraph>
                    While the leaders of guilds may speak of guild dominance and use sabotage, subterfuge, and violence for their ends, most guild members still have friends, family, and other loved ones in guilds that are not their own. Guild differences can be a basis for interactions with others, but they don't have to be the default for all of them.
                </Paragraph>
                <Paragraph>
                    Refer to the section below for more detailed information on each guild.
                </Paragraph>
                <Paragraph>
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content}/>
                    ))}
                </Paragraph>
            </Container>
        </Wrapper>
    )
}

export default TheGuildsHome