import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const ButtonCustom = ({color, value, click_aja}) => {
    if (color === 'Primary') {
        return (
        <div>
            <Button
                // className="ui icon left labeled button"
                icon 
                content={color}
                primary 
                labelPosition='left' 
                onClick={() => click_aja()} 
                // style={{backgroundColor:color}} 
                className='header-button'
            >
                {/* <i aria-hidden="true" class="pause icon"></i> */}
                {value}
                <Icon name='left arrow' />
            </Button>
        </div>
        )
    } else {
        return (
            <div>
                <Button
                    // className="ui icon left labeled button"
                    icon 
                    content={color}
                    secondary 
                    labelPosition='right' 
                    onClick={() => click_aja()} 
                    // style={{backgroundColor:color}} 
                    className='header-button'
                >
                    {/* <i aria-hidden="true" class="pause icon"></i> */}
                    {value}
                    <Icon name='right arrow' />
                </Button>
            </div>
            )
    }
}

export default ButtonCustom