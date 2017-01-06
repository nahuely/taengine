import React from 'react'

const InputText = ({ label, placeHolder, onChange }) => {
    return (
        <div>
            <label>{ label }</label>
            <input type="text" placeholder={ placeHolder } onChange={ onChange } />
        </div>        
    )
}

export default InputText