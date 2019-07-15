import React from 'react';
import Headers from './components/header'
import NavBars from './components/navbar'
import Containers from './components/container/container'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propsan_bro: ""
        }
    }
    
    render () {
        return (
            <div>
                <NavBars></NavBars>
                <Headers
                    props_input_main={(e) => this.setState({propsan_bro: e})}
                >
                </Headers>

                <Containers props_list= {this.state.propsan_bro}></Containers>
            </div>
        )
    }
}



export default Main