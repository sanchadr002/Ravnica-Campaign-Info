import React from 'react'
import styled from 'styled-components'

const CardArt = (props) => {

    const { imageURL } = props

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