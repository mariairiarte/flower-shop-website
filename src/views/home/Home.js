import React, { Component } from 'react'
import { Header } from '../../components/common'
import { ListView } from '../../components/items'

import { fakeFetchItems } from '../../fake' // Dummy data

class Home extends Component { // Product list

    render() {

        const items = fakeFetchItems() // Petición API

        return (
            <div>
                <Header />
                <ListView items={ items } />
            </div>
        )
    }

}

export default Home