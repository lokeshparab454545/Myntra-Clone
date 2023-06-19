import React from 'react'
import BudgetItem from './BudgetItem'

const Budget = () => {
    const budgetImg = [
        { imgScr: '/assets/budget-1.jpg' },
        { imgScr: '/assets/budget-2.jpg' },
        { imgScr: '/assets/budget-3.jpg' },
        { imgScr: '/assets/budget-4.jpg' },
        { imgScr: '/assets/budget-5.jpg' },
        { imgScr: '/assets/budget-6.jpg' },
    ]
    return (
        <section className='budget'>
            <h1>BUDGET BUY</h1>
            <div budgetImg='fashion-imgs' style={{ display: "flex", justifyContent: "center" }}>
                {budgetImg.map((item, i) => {
                    return <BudgetItem item={item} key={i} />
                })}
            </div>
        </section>
    )
}

export default Budget
