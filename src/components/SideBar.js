import React from 'react'
import { Link } from 'react-router'

import './../assets/css/SideBar.scss'

const SideBar = () => {
    return (
        <nav className="SideBar-container">
            <ul className="SideBar-links">
                <li>
                    <Link to='/'>DashBoard</Link>
                </li>
                <li>
                    <Link to='histogram'>Historico</Link>
                </li>
                <li>
                    <Link to='strategies'>Estrategias</Link>
                </li>
                <li>
                    <Link to='data-source'>Fuentes de datos</Link>
                </li>
                <li>
                    <Link to='portfolio-managment'>Gestion de carteras</Link>
                </li>
                <li>
                    <Link to='configuration'>Opciones</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar