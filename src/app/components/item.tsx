'use client'
import React, { useContext } from "react"
import  { ShopContext } from '@/context/shop-context'

type props = {
    id: number
    title: string
    image: string
    price: number
    description: string
    category: string
}

const Item = ({ id, title, image, price, description, category }: props) => {
    const context = useContext(ShopContext)

    const cartItemCount  = context?.cartItems[id] ?? 0
    
    return (
        <div key={id} className="product">
            <div className="content">
                <p className="title">
                    {id}. {title}
                </p>
                <img src={image} alt={title} className="image" />
                <p className="price">${price}</p>
                <p className="description">{description}</p>
                <p className="category">{category}</p>
            </div>
            <button className="addToCartBtn" onClick={() => context?.addToCart(id)}>
                カートに追加する {cartItemCount > 0  && <span>({cartItemCount}個)</span>}
            </button>
        </div>
    )
}

export default Item
