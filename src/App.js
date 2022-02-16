import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";

import { Home, ProductDetail } from './views'

class App extends Component {

    render() {
        return (
           <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<ProductDetail />} />
                </Routes>
           </div>
        )
    }

}
    
export default App;