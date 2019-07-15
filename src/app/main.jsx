import React from 'react';
import axios from 'axios'

import Headers from './components/header'
import NavBars from './components/navbar'
import Containers from './components/container/container'
import { async } from 'q';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            propsan_bro: "",
            data_resp: {
                results: []
            }
        }
    }

    componentWillMount() {
        this.fetching()
        console.log('AKU WILL MOUNT');        
    }
    componentDidMount() {
        this.fetching_try()
        console.log('AKU DID MOUNT');        
    }
    
    fetching() {
        let opt = {
            // header: 'adouhaodbuauod209y08gqydvqudh9qw0d',
            method: 'GET',
            // url: 'https://jsonplaceholder.typicode.com/posts'
            url: 'https://swapi.co/api/people'
        }
        axios(opt)
        .then(({data}) => {
            console.log(data)
            this.setState({data_resp:data})
        })
        .catch(error => {
            console.log(error);
        })   
         
    }
    
    async fetching_try() {
        let opt = {method: 'GET', url:'https://jsonplaceholder.typicode.com/posts'}
        try {
            let response = await axios(opt)
            console.log(response)
        } catch (error) {
            console.log(error)
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

                <Containers 
                props_list= {this.state.propsan_bro}
                datas = {this.state.data_resp.results}
                ></Containers>
            </div>
        )
    }
}



export default Main