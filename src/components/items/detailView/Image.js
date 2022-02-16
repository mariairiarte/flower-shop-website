import React from 'react'

const Image = ({ image }) => {
    return (
        <div>
            <img alt="" src={image} style={{ width: "100%"}} />
        </div>
    )
}

export default Image