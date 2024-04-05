"use client"
import React, { useContext } from "react";
import './cart.css'
import CartItem from './cartItem'
import { ShopContext } from "@/context/shop-context";

const Cart = () => {
    const context = useContext(ShopContext)
    const totalAmount = Math.round((context?.getTotalCartAmount() ?? 0) * 100) / 100
    
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
            {content}

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p className="total">合計: ${totalAmount}</p>
                    <button
                        onClick={() => {
                            context?.checkout()
                        }}
                    >カートを空にする</button>
                </div>
            ) : (
                <h1>cart is empty</h1>
            )}
        </div>
    );
}

export default Cart
