import React from 'react'

const DropDown = ({ label, onChange, options, current }) => {
    const renderOptions = (options) => {
        return options.map(v => {
            return (
                <option>{ v }</option>
            )
        })
    }

    return (
        <div>
            <label>{ label }</label>
            <select onChange={ onChange } value={ current }>
                { renderOptions(options) }
            </select>
        </div>
    )
}

export default DropDown