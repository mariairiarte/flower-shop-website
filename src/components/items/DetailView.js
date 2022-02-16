import React, { useState } from 'react'
import { Back, Image, Description } from '.'

const DetailView = ({ item }) => {

    const { 
        image, 
        name, 
        scientificName, 
        price, 
        wateringsPerWeek,
        fertilizer,
        height
    } = item

    useState()

    return (
        <section className='detail-view'>
            <section className='detail-view-top'>
                <Back />
            </section>
            <section className='detail-view-bottom'>
                <section className='detail-view-item-image'>
                    <Image image={image} />
                </section>
                <section className='detail-view-item-description'>
                    <Description 
                        name={name}
                        scientificName={scientificName}
                        price={price}
                        wateringsPerWeek={wateringsPerWeek}
                        fertilizer={fertilizer}
                        height={height}
                    />
                </section>
            </section>
        </section>
    )
    
  
}

export default DetailView