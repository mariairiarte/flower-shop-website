import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Item.css'

const Item = ({ id, imgUrl, name, binomialName, price }) => {

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
                    <img alt="" src={ imgUrl } style={{ width: "100%"}} />
                </section>
                <section className='item-content-info'>
                    <section className='item-content-info-section'>
                        { name }
                    </section>
                    <section>
                        { binomialName }
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