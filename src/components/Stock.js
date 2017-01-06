import React from 'react'

import Numeral from 'numeral'
import moment from 'moment'

import './../assets/css/Stock.scss'

const Stock = ({ stockDetail, taData }) => {

    const strategies = (strategies) => {
        return Object.keys(strategies)
            .map( key => {
                return <div style={{ backgroundColor: strategies[key] ? 'green' : 'red' }}>{ key }</div>
            })
    }

    return (
        <div className="Stock">
            <div className="Stock-header">
                <p className="Stock-header--bold">{ stockDetail.name }</p>
                <p>{ Numeral(stockDetail.previousClose.close).format('$0,0.0') }</p>
                <p>{ Numeral(stockDetail.previousClose.volume).format('0.0a') }</p>
            </div>
            <div className="Stock-action">
                <p style={{ color: taData.buy ? 'green' : 'red' }}>{ taData.buy ? 'Buy' : 'Sell' }</p>
            </div>
            <div className="Stock-strategies">
                { strategies(taData) }
            </div>
            <div className="Stock-footer">
                <p>{ moment(stockDetail.lastUpdate, "DD/MM/YYYY").format("DD-MM-YY") }</p>
                <p>{ Numeral(0.12).format('0%') }</p>
            </div>
        </div>
    )
}

export default Stock