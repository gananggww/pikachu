import React from 'react';

class Headers extends React.Component{
    constructor() {
        super();
        this.state = {
            date: 0,
            uri: 'http://www.pokemonget.eu/shop/979-thickbox_default/pikachu-birthday-event-pokemon.jpg',
            status: false
        }
    }
    tambah() {
        let now = this.state.date
        this.setState({
            date: now + 1
        })
    }
    kurang() {
        let now = this.state.date
        if (now > 0) {
            this.setState({
                date: now - 1
            })
        } else {
            alert('ups')
        }
    }
    hacktiv() {
        if (this.state.date > 10) {
            return <div>anda sudah melebihi batas kemampuan anda</div>
        } else {
            return (
                <div>Hacktiv{this.state.date}</div>
            )
        }
    }
    ganti_image() {
        if (this.state.status == false) {
            this.setState({
                uri: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png',
                status: true
            })
        } else {
            this.setState({
                uri: 'http://www.pokemonget.eu/shop/979-thickbox_default/pikachu-birthday-event-pokemon.jpg',
                status: false
            })
        }
    }
    render() {
        return (
            <div>
                <div className='header'>   
                    <div className='header-frame'>
                        <img 
                            onClick={() => this.ganti_image()} 
                            style={{width: '100%'}} 
                            src={this.state.uri}
                        />
                    </div>
                    <div className='header-content'>
                        <div className='header-title'>
                            Hacktiv8 MeetUP
                        </div>
                        <div className='header-isi'>
                            <div className='header-isi-attr'>
                                <div>Location</div>
                                <div>Mambers</div>
                                <div>Organizers</div>
                            </div>
                            <div className='header-isi-value'>
                                <div>Jakarta</div>
                                <div>Sesi17</div>
                                {this.hacktiv()}
                            </div>
                        </div>
                        <div onClick={() => this.tambah()} className='header-button'>
                            tambah
                        </div>
                        <div onClick={() => this.kurang()} className='header-button'>
                            kurang
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Headers