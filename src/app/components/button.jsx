import React from 'react';
const ButtonCustom = ({color, value, click_aja}) => {
    return (<div onClick={() => click_aja()} style={{backgroundColor:color}} className='header-button'>
        {value}
    </div>)
}

export default ButtonCustom