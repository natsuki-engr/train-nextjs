"use client"
import { ShopContext } from "@/context/shop-context"
import React, { useContext } from 'react'

type CartItemComponentProps = {
    data: {
        id: number
        title: string
        image: string
        price: number
    }
}

const CartItem = (props: CartItemComponentProps) => {
    const { id, title, image, price } = props.data
    const context = useContext(ShopContext)
    
    const content = context !== null
        ? (
            <div className="countHandler">
                    <button onClick={() => context.removeFromCart(id)}> - </button>
                    <input
                        type="text"
                        value={context.cartItems[id]}
                        onChange={(e) => context.updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => context.addToCart(id)}> + </button>
                </div>
        ) : (
            <div>loading</div>
        )
    return (
        <div className="cartItem">
            <img src={image} alt="" />
            <div className="description">
                <p className="cartItemTitle">{title}</p>
                <p>$ {price}</p>
                (content)
            </div>
        </div>
    )
}

export default CartItem
