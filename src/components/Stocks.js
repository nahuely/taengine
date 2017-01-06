import React from 'react'

import Stock from './Stock'

const Stocks = ({ data }) => {
    const renderStocks = data => {
        return data
            .map( stock => {
                return (
                    <Stock 
                        key={ stock.stockDetail.id }
                        stockDetail={ stock.stockDetail }
                        taData={ stock.taData }
                    />
                )
            })
    }

    return (
        <div style={{ "display": "flex", "flexWrap": "wrap" }}>
            { renderStocks(data) }
        </div>
    )
}

export default Stocks