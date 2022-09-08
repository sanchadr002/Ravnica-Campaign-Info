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
    textAlign: 'left',
    fontSize: '1.5em'
})

const AccordionItemText = styled.p({
    fontSize: '1em',
    color: 'honeydew',
    padding: '1em'

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
            content:
                <AccordionItemText>
                    The Azorius Senate champions its extensive legal code as the barrier between society and 
                    chaos. Its leader is the wise and aloof Isperia. She is devoted to her guild's belief that law is the ultimate bulwark against chaos. As guildmaster, she serves as supreme judge.
                    <br/><br/>
                    The Senate is supported by three branches (refered to as "columns"), each led by an arbiter, 
                    who in turn is a part of the "Triumvirate", which advises the guildmaster. The three columns 
                    are as follows: 
                    <br/><br/>
                    The Sova Column, a body acting as a judicial branch;
                    <br/><br/>
                    The Jelenn Column, a body acting as a legislative branch;
                    <br/><br/> 
                    and the Lyev Column, the executive branch which acts as a police force.
                    <br/><br/>
                    Among the Azorius, advancement is a reward for services rendered to the guild, rather than an 
                    automatic consequence of increased renown.
                </AccordionItemText>
        },
        {
            title: 'Boros Legion',
            content:
                <AccordionItemText>
                    The Boros Legion combines the forces of law and military strength to forge Ravnica into a 
                    safe and just society for all. Its current guildmaster is the angel Aurelia. As a leader, 
                    Aurelia shows appreciation for the ordinary citizens who are often caught in the middle of 
                    interguild violence. 
                    <br/><br/>
                    The Legion has a rigid hierarchy, at the top of which sit many angels. These celestial beings 
                    act mostly as holy warriors and advisors in leadership roles. For its military force, the 
                    guildmaster has Commanders, who wield larger units each led by Captains. These Captains lead 
                    smaller garrisons. Even further within this hierarchy are groups of soldiers who specialize in 
                    certain forms of battle, known as Skyknights, Wojeks, Sunhome Guards, and Firefists.
                </AccordionItemText>
        },
        {
            title: 'House Dimir',
            content:
                <AccordionItemText>
                    House Dimir is the most secretive out of all the guilds. Its mere existence is doubted by 
                    the populace at large. The guild masquerades as respectable messengers and reporters, while in 
                    truth being an association acting as a network of spies and assassins. Its first guildmaster 
                    was the vampire Szadek, who ruled the guild for 10,000 years until he was arrested and killed 
                    in the turmoil of the Decamillennial Celebration. Its current guildmaster, Lazav, is rumored 
                    to be a mysterious shapeshift, rarely seen.
                    <br/><br/> 
                    House Dimir does not have official ranks, 
                    with competence and information in the guild instead being rewarded with missions of 
                    increasing importance. Lazav considers those with who've gathered 
                    considerable amounts of secrets to be worthy of acting as counsel.
                </AccordionItemText>
        },
        {
            title: 'Golgari Swarm',
            content:
                <AccordionItemText>
                    The Golgari Swarm acts as Ravnica's waste management system. It celebrates the vibrancy 
                    of life, but gives an equal amount of attention to nature's facets of rot, death, and destruction. Its current leader, Jarad von Savo, extinguised old sacrificial practices among the Golgari and began instructing the rot farms to provide food for all. However, not all denizens of the Undercity have prospered under his rule ... 
                    <br/><br/>
                    Progressing up the ranks does not quite exist among the Golgari. Your renown 
                    within the guild is essentially a direct measure of the guildmasters' knowledge of you, her 
                    confidence in your abilities, and her interest in your activities.
                </AccordionItemText>
        },
        {
            title: 'Gruul Clans',
            content:
                <AccordionItemText>
                    The Gruul Clans are a disparate collection of groups who inhabit the wild areas of 
                    Ravnica, well as abandoned zones and ruins. They see civilization as a source of weakness, and 
                    work towards tearing it down to restore the true order of nature. The cyclops Borborygmos 
                    leads the Gruul as guildmaster. As a leader, he embodies the raging fire that burns in the 
                    belly of the Gruul. 
                    <br/><br/>
                    Ranks do not formally exist among 
                    the Gruul. Renown within the Clans could also be called glory -- strength and power in battle 
                    is rewarded with the respect of your peers, and the acceptance of your leadership.
                </AccordionItemText>
        },
        {
            title: 'Izzet League',
            content:
                <AccordionItemText>
                    The Izzet League exists as both a scientific institution, and Ravnica's infrastructure 
                    management system. The League prioritizes discovery and experimentation, with many of its 
                    research projects leading to some kind of public chaos. Its current and first guildmaster, 
                    Niv-Mizzet, acts as the League's temperamental leader. Despite being obsessed with his own 
                    omniscience, his ingenious inventions actually end up serving the citizens of Ravnica.
                    <br/><br/>
                    Ranks within the league are determined by quality of research & experiment results, with 
                    higher renown rewarded with more access to teams of researchers andresources.
                </AccordionItemText>
        },
        {
            title: 'Orzhov Syndicate',
            content:
                <AccordionItemText>
                    To the Orzhov Syndicate, wealth is power. The guild wields money, debt, and faith to 
                    operate as a crime family while maintaing the facade of a religious institution. The Ghost 
                    Council of Orzhova, also known as the Obzedat, serves as the ruling body of the Orzhov 
                    Syndicate, with Karlov acting as the guild's formal guildmaster. These beings have managed to 
                    cheat mortality, and have maintained their consciousness (and their greed) beyond the 
                    threshold of death.
                    <br/><br/>
                    The Orzhov value structure, and see the afterlife as an opportunity for debtors to continue 
                    paying off their death.
                    <br/><br/> 
                    All members start at the bottom, with renown requiring devotion and debt collecting.
                </AccordionItemText>
        },
        {
            title: 'Cult of Rakdos',
            content:
                <AccordionItemText>
                    The Cult of Rakdos values entertainment and comedy, and sees the 'promise of tomorrow' to 
                    be the most hilarious joke of all. Members of the Cult of Rakdos often work in entertainment 
                    in Ravnica, ranging from relaxed bars and lounges, to more 'killer' clubs. Its first and 
                    current guildmaster is the demon Rakdos, whom Cultists live to entertain. Rakdos embodies 
                    hedonism, and is known for capricious cruelty and megalomania.
                    <br/><br/>
                    Rank and renown within the guild is directly tied to what Rakdos thinks of your performances. 
                    However, there are those among the Rakdos who have begun to tire of Rakdos hogging all the 
                    spotlight ...
                </AccordionItemText>
        },
        {
            title: 'Selesnya Conclave',
            content:
                <AccordionItemText>
                    The Selesnya Conclave originally existed to act as an institution of conservation and 
                    charity, but pushes towards expansion of its community to embrace all of Ravnica within its 
                    peaceful union. The guild holds the union of nature and civilization in the highest regards. 
                    Its current guildmaster, Trostani, is a fusion of three dryads, and are said to represent the 
                    will of the Worldsoul. Trostani seeks to bring all life of Ravnica under their protective fold.
                    <br/><br/> 
                    Rank does not exist among the Selesnya, and members are encouraged to pursue what 
                    makes them happy and unique in the world, as long as it benefits the community as a whole.
                </AccordionItemText>
        },
        {
            title: 'Simic Combine',
            content:
                <AccordionItemText>
                    The Simic Combine discovers the secrets of life within its often-underweater 
                    laboratories. While the Combine does work in matters of medicine and public health, its real 
                    efforts life in biological experimentation to adapt nature and civilization to one another. 
                    Its current guildmaster, Vannifar, believes that the Combine's philosophy should move towards 
                    actively perfecting nature, rather than simply guide it along an optimized path for slow, 
                    incremental progress. 
                    <br/><br/>
                    Rank and renown among the Simic Combine are determined by functionality. Greater 
                    competence is rewarded with greater responsibility on research projects.
                </AccordionItemText>
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
                    Refer to the section below for more information on each guild.
                </Paragraph>
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content}/>
                    ))}
            </Container>
        </Wrapper>
    )
}

export default TheGuildsHome