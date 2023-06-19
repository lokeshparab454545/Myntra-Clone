import React from 'react'
import BrandItem from './BrandItem'
import './Brand.css'

const Brand = () => {
    const brandImg = [
        { imgScr: '/assets/brand-1.webp' },
        { imgScr: '/assets/brand-2.webp' },
        { imgScr: '/assets/brand-3.webp' },
        { imgScr: '/assets/brand-4.webp' },
        { imgScr: '/assets/brand-5.webp' },
        { imgScr: '/assets/brand-6.webp' },
    ]
    return (
        <section className='brands'>
            <h1>FAVOURITE BRANDS</h1>
            <div className='brand-images'>
                {
                    brandImg.map((item) => {
                        return <BrandItem item={item} />
                    })
                }
            </div>
        </section>
    )
}

export default Brand
