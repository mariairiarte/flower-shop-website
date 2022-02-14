import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/index.css'

const Item = ({ id, image, name, scientificName, price }) => {

    let navigate = useNavigate();
    
    function handleClick() {
        console.log(id)
        navigate({
            pathname: `/${id}`
        });
    }

    return (
        <div className='item'>
            <div onClick={ handleClick } >
                <img src={ image } style={{ width: "150px"}} />
                <h1>{ name }</h1>
                <h1>{ scientificName }</h1>
                <h1>{ price }</h1>
            </div>
        </div>
    )
    
}

export default Item