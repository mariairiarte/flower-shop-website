import React, { Component } from 'react'
import { Header } from '../../components/common'
import { ListView } from '../../components/containers'
import axios from 'axios'
import './Home.css'

class Home extends Component { 

    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`https://dulces-petalos.herokuapp.com/api/product`)
            .then((res) => {
                this.setState({ 
                    items: res.data 
                })
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