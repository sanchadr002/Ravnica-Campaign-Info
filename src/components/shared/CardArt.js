import React from 'react'
import styled from 'styled-components'

const CardArt = ({ imageURL }) => {

    const StyledImg = styled.img({
        float: 'inline-end',
        padding: '1em'
    })

    return (
        <>
            <StyledImg src={`${imageURL}`}></StyledImg>
        </>
    )
}

export default CardArt