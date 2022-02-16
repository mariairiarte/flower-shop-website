import React, { Component } from 'react'
import { Header } from '../../components/common'
import { ListView } from '../../components/items'
import axios from 'axios'

class Home extends Component { // Product list

    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`https://dulces-petalos.herokuapp.com/api/product`)
            .then(res => {
                const items = res.data
                this.setState({ items })
            })
    }

    render() {

        return (
            <div>
                <Header />
                <ListView items={ this.state.items } />
            </div>
        )
    }

}

export default Home