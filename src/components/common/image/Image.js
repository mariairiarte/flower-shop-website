import React from 'react'

import "./Image.css"

const Image = ({ image }) => {
    return (
        <div>
            <img alt="" src={ image } style={{ width: "100%"}} />
        </div>
    )
}

export default Image