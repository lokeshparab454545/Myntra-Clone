import React from 'react'
import FashionItem from './FashionItem'
import './Fashion.css'
const Fashion = () => {
    const fashionImg = [
        { imgScr: '/assets/fashion-1.webp' },
        { imgScr: '/assets/fashion-2.webp' },
        { imgScr: '/assets/fashion-3.webp' },
        { imgScr: '/assets/fashion-4.webp' },
        { imgScr: '/assets/fashion-5.webp' },
        { imgScr: '/assets/fashion-6.webp' },
        { imgScr: '/assets/fashion-7.webp' },
        { imgScr: '/assets/fashion-8.webp' },
    ]
    return (
        <section className='fashion-essentials'>
            <h1>FASHION & ESSENTIALS</h1>
            <div className='fashion-imgs'>
                {fashionImg.map((item, i) => {
                    return <FashionItem key={i} item={item} />
                })}
            </div>
        </section>
    )
}

export default Fashion
