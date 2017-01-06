import React, { Component } from 'react'
import moment from 'moment'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import data from './../mock/stocks'

class Histogram extends Component {
    render() {
        return (
            <div>
                <p>Histogram</p>
                <div style={{ width: 800 }}>
                    <LineChart width={700} height={300} data={data}>
                        <XAxis dataKey="Date" />
                        <YAxis dataKey="close" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="linear" dataKey="close" stroke="#82ca9d" />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default Histogram

// <VictoryZoom>
//                         <VictoryChart
//                             theme={ VictoryTheme.material }
//                             domainPadding={ 10 }>                  
//                             <VictoryGroup
//                                     data={ data }
//                                     x={ d => {
//                                         var year = d.Date.toString().substring(0,4)
//                                         var month = d.Date.toString().substring(4,6)
//                                         var day = d.Date.toString().substring(6,8)
//                                         return new Date(year, month-1, day)
//                                     } }
//                                     y="close">
//                                 <VictoryLine />
//                                 <VictoryVoronoiTooltip
//                                     labels={(d) => `date: ${d.Date} \n close: ${d.close}`}
//                                 />                    
//                             </VictoryGroup>
//                         </VictoryChart>  
//                     </VictoryZoom>       