import React, { useState } from 'react'

import Item from './Item'
import { SearchBar } from './searchBar'

const ListView = ({ items }) => { 

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <section className='list-view'>
            <section className='list-view-search'>
                <SearchBar setSearchTerm={ setSearchTerm } />
            </section>
            <section className='list-view-items'>
                {items.filter((item) => {
                    if (searchTerm == "") {
                        return item
                    } else if (item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                               item.scientificName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return item
                    }
                }).map((item) => {
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

