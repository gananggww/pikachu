import React from 'react';
const InputCustom = ({name_attr, value_attr}) => {
    console.log('INI ADA YA BRO',name_attr)
    return (
        <input onChange={(e) => console.log(e.target.value)} name={name_attr} defaultValue="" placeholder={value_attr}></input>
    )
}

export default InputCustom