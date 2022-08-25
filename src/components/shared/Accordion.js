import React, { useState } from 'react'
import styled from 'styled-components'

const Accordion = ({ title, content }) => {
    
    const [isActive, setIsActive] = useState(false)

    const accordionTitleStyle = { display: 'flex' }

    return(
        <div className="accordion-item">
            <div className="accordion-title" style={accordionTitleStyle} onClick={() => setIsActive(!isActive)}>
                <div>{ title }</div>
                <aside>{ isActive ? '-' : '+' }</aside>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    )
}

export default Accordion