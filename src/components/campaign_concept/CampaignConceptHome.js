import React, { useState, useEffect } from 'react'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
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

const AccordionItemText = styled.p({
    fontSize: '1em',
    color: 'honeydew',
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
        title: 'General Idea',
        content:
            <AccordionItemText>
                The overall tone that I'm going for with this campaign is something like Charlie's 
                Angels meets the Illuminati. I want it to be campy and action-packed while still 
                being cutthroat and having high stakes.
                <br/><br/>
                Your character will be a part of a group known as the Order of the Guildpact. This group's aim 
                is to protect Ravnica through maintaining balance between the guilds. Their methods for 
                achieving this include sabotage, violence, and subterfuge.
                <br/><br/>
                As of right now, the campaign will consist of "missions" and "non-missions". Missions will be 
                tasks given to you by your superiors in the Order. Non-missions will be whatever the 
                characters decide to do outside of mission time.
            </AccordionItemText>
    },
    {
        title: 'The Order of the Guildpact',
        content:
            <AccordionItemText>
                Each player character will be a member of an organization known as the "Order of 
                the Guildpact". The Order exists outside of the guild system, and is comprised of 
                people who belong to guilds in their day-to-day life. This group seeks to maintain 
                balance on Ravnica through sabotaging guild efforts that would extend their reach 
                of power too far.
                <br/><br/>
                The Order is structured according to experience and ability, with 
                'the Mind' consisting of its founders and most powerful members who lead the 
                organization; 'the Eyes & Ears', existing under the Mind, is made up of solo agents 
                who take on missions of greater urgency, and are both trustworthy and powerful 
                enough to be deemed advisors to the leadership; 'the Nerves' act both in groups and 
                solo, and serve as both relayers and seekers of information, reporting back to the 
                Eyes & Ears with their findings and handing out missions to the lower rank; 'the 
                Hands' is at the bottom of the Order, with agents of this rank being out in the 
                field the most, carrying out all missions delegated to them. 
                <br/><br/>
                The group is less than one hundred years old. The structure and leadership of the Order has changed very little over time. It is only until recently that it has felt the need to expand its ranks and actively seek out potential members.
                <br/><br/>
                Secrecy is valued above all else in the Order, with the only rule for executing missions being "Leave no questions."
            </AccordionItemText>
    },
    {
        title: 'A Rough Timeline',
        content: 
            <AccordionItemText>
                Our timeline is going to be a little bit different from what the sourcebook says.
                <br/><br/>
                The current year is 10,1076. Nearly 200 hundred years since the Decamillennial Celebration have passed.
                <br/><br/>
                The festivities were meant to honor the 10,000 years of (very relative) peace and cooperation achieved by the guilds through the signing of the Guildpact all that time ago. The Guildpact magically prevents large-scale conflict between the guilds, and assigned each guild a role to help sustain a functioning society.
                <br/><br/>
                However, on the eve of the celebrations, the Guildpact shattered, and Ravnica was thrown into chaos. The guilds resumed fighting over any scrap of territory or influence they could gain. For nearly one hundred years, people suffered as they watched the system their livelihood depended on collapse around them.
                <br/><br/>
                Nearing the end of the century, the Order of the Guildpact formed with one goal: restore and maintain balance on Ravnica. Following years of unending sabotage and subterfuge, an uneasy peace settled on Ravnica. Guilds were no longer willing to make petty power grabs, having seen what results awaited such attempts. The guilds eventually resumed their old roles, and began to cooperate as they once did.
                <br/><br/>
                In the present, the Order continues to watch with eyes unseen, being quick to act on any guild maneuver deemed to be an overreach. However, the recent appearance of mysterious portals threaten to undo the tenuous ties of peace between the guilds, and the Order's hold over it.<br/>
                These portals reportedly lead to sources of power that would allow one guild to overthrow the others. With the guilds making moves to harness what lies within the portals, the Order begins a hurried recruitment process ...
            </AccordionItemText>
    },
    {
        title: 'Mission Structure',
        content:
            <AccordionItemText>
                Generally, the party will be assigned a mission by a Nerve which must be carried 
                out within a particular time limit. An example of a mission would be 'The Izzet 
                League is developing a superweapon that would threaten the guilds and the people of 
                Ravnica. Put a stop to it.'
                <br/><br/>
                How that mission is completed is almost entirely up to the party. 
                Maybe a PC is owed a favor by a low-ranking Izzet researcher, and the party chooses 
                to gather information on the scientist leading the weapon's development. From there, 
                the party could plan to capture the scientist and hold them until the project's 
                funding runs dry, or try and convince them to put a stop to the project. Or, maybe the 
                party chooses a more direct approach, and seeks out the weapon's location to trash 
                the laboratory and all of its research.
                <br/><br/>
                I envision missions taking the form of three nebulous stages: 'Information 
                gathering,' 'set-up', and 'execution.' However, this structure isn't set in stone, 
                and the party is encouraged to explore what they like in order to find ways to 
                complete the missions.
                <br/><br/>
                The party will be given some equipment at the start of each mission to help with completing it (these will usually be the various guild charms.)
            </AccordionItemText>
    }
]

const CampaignConceptHome = () => {
    return (
        <>
            <Wrapper>
                <Title>Campaign Concept</Title>
                <Container>
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content}/>
                    ))}
                </Container>
            </Wrapper>
        </>
    )
}

export default CampaignConceptHome