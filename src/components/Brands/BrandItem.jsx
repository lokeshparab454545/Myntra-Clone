import React from 'react'

const BrandItem = ({ item }) => {
    return (
        <div className='brand-item'>
            <img src={item.imgScr} alt="" />
        </div>
    )
}

export default BrandItem
