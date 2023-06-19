import React from 'react'
import BudgetItem from './BudgetItem'

const Budget = () => {
    const budgetimg = [
        { imgScr: '/assets/budget-1.jpg' },
        { imgScr: '/assets/budget-2.jpg' },
        { imgScr: '/assets/budget-3.jpg' },
        { imgScr: '/assets/budget-4.jpg' },
        { imgScr: '/assets/budget-5.jpg' },
        { imgScr: '/assets/budget-6.webp' },
    ]
    return (
        <section className='budget'>
            <h1>BUDGET BUY</h1>
            <div className='fashion-imgs' style={{ display: "flex", justifyContent: "center" }}>
                {budgetimg.map((item, i) => {
                    return <BudgetItem item={item} key={i} />
                })}
            </div>
        </section>
    )
}

export default Budget
