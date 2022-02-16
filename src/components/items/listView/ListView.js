import React, { useState } from 'react'

import Item from './Item'
import { SearchBar } from '../searchBar'

import './ListView.css'

const ListView = ({ items }) => { 

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <section className='list-view'>
            <section className='list-view-search'>
                <SearchBar setSearchTerm={ setSearchTerm } />
            </section>
            <section className='list-view-items'>
                {items.filter((item) => {
                    if (searchTerm === "") {
                        return item
                    } else if (item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                               item.binomialName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return item
                    }  else {
                        return false
                    }
                }).map((item) => {

                    const { id, imgUrl, name, binomialName, price } = item

                    return (
                        <Item  
                            key={id} 
                            id={id}
                            imgUrl={imgUrl} 
                            name={name}  
                            binomialName={binomialName} 
                            price={price}
                        />
                    )

                })}
            </section>
        </section>
    )
    
}

export default ListView

