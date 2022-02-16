import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/index.css'

const Item = ({ id, image, name, scientificName, price }) => {

    let navigate = useNavigate();
    
    function handleClick() {
        navigate({
            pathname: `/${id}`
        });
    }

    return (
        <section className='item'>
            <section onClick={ handleClick } className='item-content'>
                <section className='item-content-image'>
                    <img src={ image } style={{ width: "100%"}} />
                </section>
                <section className='item-content-info'>
                    <section className='item-content-info-section'>
                        { name }
                    </section>
                    <section>
                        { scientificName }
                    </section>
                    <section>
                        { price } €
                    </section>
                </section>
            </section>
        </section>
    )
    
}

export default Item