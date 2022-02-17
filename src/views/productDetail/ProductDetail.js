import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/common'
import { DetailView } from '../../components/containers'
import axios from 'axios'

import './ProductDetail.css'

const ProductDetail = () => {

    const [item, setItem] = useState({})

    const { id } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get(`https://dulces-petalos.herokuapp.com/api/product/${id}`)
            setItem(data)
        }

        fetchData();

    }, [id]);
    
    return (
        <div>
            <Header />
            <DetailView item={ item } />
        </div>
    )

}

export default ProductDetail