import React from "react"
import { useNavigate } from "react-router-dom"

import "./Back.css"

const Back = () => {

    const navigate = useNavigate()

    return (
        <div className="back">
            <button onClick={() => navigate(-1)}>Atrás</button>
        </div>
    )
}

export default Back