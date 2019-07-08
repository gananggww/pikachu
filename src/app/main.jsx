import React from 'react';
import Headers from './components/header'
import NavBars from './components/navbar'
import Containers from './components/container/container'

const Main = () => {
    return (
        <div>
            <NavBars></NavBars>
            <Headers></Headers>
            {/* <Containers></Containers> */}
        </div>
    )
}

export default Main