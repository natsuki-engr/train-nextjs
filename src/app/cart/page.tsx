"use client"
import React, { useContext } from "react";
import './cart.css'
import CartItem from './cartItem'
import { ShopContext } from "@/context/shop-context";

const Cart = () => {
    const context = useContext(ShopContext)
    const content = context !== null ? (
        <div className="cart">
            {context.items.map(item => {
                if(context.cartItems[item.id] !== 0) {
                    return <CartItem key={item.id} data={item} />
                }
            })}
        </div>
    ) : (
        <div>loading</div>
    )
    
    return (
        <div className="cart">
            <div>
                <h1>カートの商品</h1>
            </div>
            (content)

            <div className="checkout">
                <p>小計: xxxxx</p>
                <button>買い物を続ける</button>
                <button>チェックアウト</button>
            </div>
        </div>
    );
}

export default Cart
