import React from 'react'

import './../assets/css/Header.scss'

const Header = ({ title }) => {
    return (
        <header className='Header-container'>
            <h1>{ title }</h1>
        </header>
    )    
}

export default Header