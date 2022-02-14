import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/common'
import { DetailView } from '../../components/items'

const ProductDetail = () => {

    let { id } = useParams()

    // fetch product by id

    const item = {
        code: 1,
        id: "001",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Rose_Super_Star.jpg/1200px-Rose_Super_Star.jpg',
        name: 'Rose',
        scientificName: 'Rosa chinensis Jacq.',
        price: 4.95,
        description: "Description of the product"
    }

    return (
        <div>
            <Header />
            <DetailView />
        </div>
    )

}

export default ProductDetail