import React from 'react'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/common'
import { DetailView } from '../../components/items'

import { fakeFetchItem } from '../../fake' 

const ProductDetail = () => {

    let { id } = useParams()

    let item = fakeFetchItem(id) // Fetch product by id

    return (
        <div>
            <Header />
            <DetailView item={ item } />
        </div>
    )

}

export default ProductDetail