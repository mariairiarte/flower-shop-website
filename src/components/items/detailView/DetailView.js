import React from 'react'
import { Back, Image, Description } from '..'

import './DetailView.css'

const DetailView = ({ item }) => {

    const { 
        imgUrl, 
        name, 
        binomialName, 
        price, 
        wateringsPerWeek,
        fertilizerType,
        heightInCm
    } = item

    return (
        <section className='detail-view'>
            <section className='detail-view-top'>
                <Back />
            </section>
            <section className='detail-view-bottom'>
                <section className='detail-view-item-image'>
                    <Image image={ imgUrl } />
                </section>
                <section className='detail-view-item-description'>
                    <Description 
                        name={ name }
                        binomialName={ binomialName} 
                        price={ price }
                        wateringsPerWeek={ wateringsPerWeek }
                        fertilizerType={fertilizerType}
                        heightInCm={heightInCm}
                    />
                </section>
            </section>
        </section>
    )
    
  
}

export default DetailView