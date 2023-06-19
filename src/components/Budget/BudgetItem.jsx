import React from 'react'

const BudgetItem = ({ item }) => {
    return (
        <div>
            <div className='budget-img'>
                <img width="280px" src={item.imgScr} alt="" />
            </div>
        </div>
    )
}

export default BudgetItem
