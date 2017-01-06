import React, { Component } from 'react'

import Stocks from './../components/Stocks'
import data from './../mock/stocks'

class DashBoard extends Component {
    render() {
        return (
            <div>
                <p>DashBoard</p>
                <Stocks data={ data }/>
            </div>
        )
    }
}

export default DashBoard