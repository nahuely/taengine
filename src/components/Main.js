import React from 'react'

import './../assets/css/Main.scss'

const Main = ({ children }) => {
    return (
        <main className="Main-container">
            { children }
        </main>
    )
}

export default Main