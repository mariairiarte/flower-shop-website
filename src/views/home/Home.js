import React, { Component } from 'react'
import { Header } from '../../components/common'
import { ListView } from '../../components/items'

const items = [{
    code: 1,
    id: "001",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Rose_Super_Star.jpg/1200px-Rose_Super_Star.jpg',
    name: 'Rose',
    scientificName: 'Rosa chinensis Jacq.',
    price: 4.95
}, {
    code: 2,
    id: "002",
    image: 'https://ecocosas.com/wp-content/uploads/2019/01/lavanda-1.jpg',
    name: 'Lavander',
    scientificName: 'Lavandula',
    price: 4.95
}] // dummy data

class Home extends Component { // Listado de productos

    render() {

        return (
            <div>
                <Header />
                <ListView items={ items } />
            </div>
        )

    }

}

export default Home