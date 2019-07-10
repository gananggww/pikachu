import React from 'react';
import ButtonCustom from '../button'

const Lists = ({maping}) => {
    return (
        <div className='lists-card'>
            {maping.map((item, idx) => {
                return (
                    <div key={idx} className='list-card'>
                        <div>{item.title}</div>
                        <div>{item.content1}</div>
                        <div>{item.content2}</div>
                        <div>Button {item.id}</div>
                        <ButtonCustom
                            color='green'
                            value={`Button ${item.id}`}
                        />
                    </div>       
                )
            })}
        </div>
    )
}

export default Lists