// Import dependencies
import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Wrapper = styled.section({
    padding: '1em',
    background: 'lightblue',
    display: 'flex'
})

const NavItem = styled.span({
    padding: '1em',
    
})

const Navbar = () => {
    
    return (
        <Wrapper>
            <NavItem>
                <Link to="/Ravnica-Campaign-Info">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/guilds">The Guilds</Link>
            </NavItem>
            <NavItem>
                <Link to="/campaign">Campaign Concept</Link>
            </NavItem>
            <NavItem>
                <Link to="/character">Character Creation</Link>
            </NavItem>
        </Wrapper>
    )
}

export default Navbar