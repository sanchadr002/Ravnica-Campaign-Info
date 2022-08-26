import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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

const Paragraph = styled.p({
    padding: '1em',
    background: 'darkslategray',
    color: 'honeydew',
    textAlign: 'left',
    fontSize: '1.5em'
})

const CampaignConceptHome = () => {
    return (
        <>
            <Wrapper>
                <Title>Campaign Concept</Title>
                <Container>
                    <Header>General Idea</Header>
                        <Paragraph>
                            The overall tone that I'm going for with this campaign is something like Charlie's 
                            Angels meets the Illuminati. I want it to be campy and action-packed while still 
                            being cutthroat and having high stakes. There won't be much of a narrative to 
                            start, with the initial focus being on establishing the characters in the world of 
                            Ravnica. Think about what your character does to hide their secret activities from 
                            the rest of the guild, and how their status as a member of a secret society affects 
                            their relationship with their guild, their loved ones, and themselves.
                        </Paragraph>
                    <Header>The Order of the Guildpact</Header>
                        <Paragraph>
                            Each player character will be a member of an organization known as the "Order of 
                            the Guildpact". The Order exists outside of the guild system, and is comprised of 
                            people who belong to guilds in their day-to-day life. This group seeks to maintain 
                            balance on Ravnica through sabotaging guild efforts that would extend their reach 
                            of power too far. 
                        </Paragraph>
                        <Paragraph>
                            The Order is structured according to experience and ability, with 
                            'the Mind' consisting of its founders and most powerful members who lead the 
                            organization; 'the Eyes & Ears', existing under the Mind, is made up of solo agents 
                            who take on missions of greater urgency, and are both trustworthy and powerful 
                            enough to be deemed advisors to the leadership; 'the Nerves' act both in groups and 
                            solo, and serve as both relayers and seekers of information, reporting back to the 
                            Eyes & Ears with their findings and handing out missions to the lower rank; 'the 
                            Hands' is at the bottom of the Order, with agents of this rank being out in the 
                            field the most, carrying out all missions delegated to them. 
                        </Paragraph>
                        <Paragraph>
                            The group is less than a hundred years old, with its formation coming about shortly 
                            before the discovery of mysterious 'demi-planes', from which massive amounts of 
                            energy and other resources can be drawn. Its recruitment process consists of 
                            scouting for potential members, and inviting them into the Order upon confirmation 
                            of sufficient competence.
                        </Paragraph>
                    <Header>Recent History</Header>
                        <Paragraph>
                            The cause of the Order of the Guildpact's formation lies in the events of the War 
                            of the Spark. Less than two centuries ago, Ravnica was invaded by an 
                            inter-dimensional dragon demi-god, Nicol Bolas who sought to ascend to godhood. To 
                            achieve this, he sought to rain violence and terror on the plane in order to lure 
                            thousands of powerful beings known as 'planeswalkers' to the world, where he 
                            planned on trapping them and devouring their 'spark' (their source of power).
                        </Paragraph>
                        <Paragraph>
                            Despite an army of nearly-immortal undead known as 'the Eternals', Nicol Bolas 
                            failed, but still wreaked havoc on the plane. Near the end of Bolas' invasion, 
                            Niv-Mizzet, the former Izzet League guildmaster, took on the role of Living 
                            Guildpact, and became an embodiment of the law magic that binds Ravnica.
                        </Paragraph>
                        <Paragraph>
                            Decades after the War of the Spark, an uneasy peace had settled between the guilds, 
                            thanks in large part to the efforts of Niv-Mizzet and several guild leaders. 
                            However, it did not take long for paranoia and suspicion to run rampant again. 
                            Being accused of favoring the Izzet League, Niv-Mizzet was assassinated, causing 
                            the plane to plunge into chaos once more.
                        </Paragraph>
                        <Paragraph>
                            Nearly a century passed without a guildpact, and nearly a century of chaos was 
                            endured by the Ravnican people. However, in due time a new and weaker guildpact was 
                            signed by the guilds, and The Order of the Guildpact secretly formed to assure its 
                            enforcement.
                        </Paragraph>
                        <Header>Mission Structure</Header>
                        <Paragraph>
                            Generally, the party will be assigned a mission by a Nerve which must be carried 
                            out within a particular time limit. An example of a mission would be 'The Izzet 
                            League is developing a superweapon that would threaten the guilds and the people of 
                            Ravnica. Put a stop to it.' How that mission is completed is almost entirely up to 
                            the party. Failure to complete the mission within the time limit doesn't 
                            necessarily mean death, and could serve as a way to narratively close up the 
                            campaign!
                        </Paragraph>
                        <Paragraph>
                            Maybe a PC is owed a favor by a low-ranking Izzet researcher, and the party chooses 
                            to gather information on the scientist leading the weapon's development. From here, 
                            the party could plan to capture the scientist and hold them until the project's 
                            funding runs or try and convince them to put a stop to the project. Or, maybe the 
                            party chooses a more direct approach, and finds out the weapon's location to trash 
                            the laboratory and all its research.
                        </Paragraph>
                        <Paragraph>
                            I envision missions taking the form of three nebulous stages: 'Information 
                            gathering,' 'set-up', and 'execution.' However, this structure isn't set in stone, 
                            and the party is encouraged to explore what they like in order to find ways to 
                            complete the missions.
                        </Paragraph>
                    <Header>In between missions</Header>
                        <Paragraph>
                            Several weeks will take place between missions, and what players do with that time 
                            is up to them. Players are welcome to do the downtime activities listed in the PHB. 
                            I think these periods of time will be a great way to explore Ravnica and what it is 
                            that your character fights for. However, it might be difficult to explore entire 
                            narrative threads early on. To start, try using this time to explore what it is 
                            that interests you/your character about the plane.
                        </Paragraph>
                </Container>
            </Wrapper>
        </>
    )
}

export default CampaignConceptHome