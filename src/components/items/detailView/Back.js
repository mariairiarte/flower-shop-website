import React from "react"
import { useNavigate } from 'react-router-dom';

const Back = () => {

    const navigate = useNavigate();

    return (
        <div className="detail-view-top-back">
            <button onClick={() => navigate(-1)}>Atrás</button>
        </div>
    )
}

export default Back