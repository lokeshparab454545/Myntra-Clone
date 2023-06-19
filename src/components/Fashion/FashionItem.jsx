import React from 'react'

const FashionItem = ({ item }) => {
    return (
        <div className='fashion-img'>
            <img src={item.imgScr} alt="" />
        </div>
    )
}

export default FashionItem
