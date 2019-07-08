import React from 'react';

const Headers = () => {
    return (
        <div>
            <div className='header'>   
                <div className='header-frame'>
                    photo
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
                            <div>Sesi16</div>
                            <div>Hacktiv8</div>
                        </div>
                    </div>
                    <div onClick={() => alert('hehe')} className='header-button'>
                        button
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Headers