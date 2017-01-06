import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import DashBoard from './containers/DashBoard'
import Histogram from './containers/Histogram'
import Strategies from './containers/Strategies'
import DataSource from './containers/DataSource'
import PortfolioManagment from './containers/PortfolioManagment'
import Configuration from './containers/Configuration'

export default (
    <Route path='/' component={ App }>
        <IndexRoute component={ DashBoard } />
        <Route path='histogram' component={ Histogram } />
        <Route path='strategies' component={ Strategies } />
        <Route path='data-source' component={ DataSource } />
        <Route path='portfolio-managment' component={ PortfolioManagment } />
        <Route path='configuration' component={ Configuration } />
    </Route>
)