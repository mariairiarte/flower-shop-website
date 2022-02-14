import React from 'react'

import Item from './Item'
import Search from './Search'

const ListView = ({ items }) => { 

    return (
        <section className='list-view'>
            <section className='list-view-search'>
                <Search />
            </section>
            <section className='list-view-items'>
                {items.map((item) => {
                    const { code, id, image, name, scientificName, price } = item
                    return (
                        <Item  
                            key={code} 
                            id={id}
                            image={image} 
                            name={name}  
                            scientificName={scientificName} 
                            price={price}
                        />
                    )
                })}
            </section>
        </section>
    )
    
}

export default ListView

