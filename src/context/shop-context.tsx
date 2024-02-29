'use client'
import { createContext, useEffect, useState } from "react"
import { Item } from "@/domains/item"

export const ShopContext = createContext<{
    cartItems: Record<number, number>,
    getTotalCartAmount: Function,
    addToCart: Function,
    removeFromCart: Function,
    updateCartItemCount: Function,
    checkout: Function,
} | null>(null)

const getDefaultCart = () => {
    const productsLength = 20
    let cart: Record<number, number> = {}
    for(let i = 0; i < productsLength; i++) {
        cart[i] = 0;
    }

    return cart
}

export const ShopContextProvider: React.FC<{children: React.ReactNode}> = (props) => {
    const [items, setItems] = useState<Item[]>([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json)
            .then((data: any) => {
                console.log('data', data)
                setItems(data as Item[])
            })
    })
    
    const [cartItems, setCartItems] = useState<Record<number, number>>(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                
                let itemInfo = items.find((product) => product.id === Number(item))
                if(itemInfo !== undefined) {
                    totalAmount += cartItems[item] * itemInfo.price
                }
            }
        }
    }

    const addToCart = (itemId: number) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId: number) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount: number, itemId: number) => {
        setCartItems(prev => ({ ...prev, [itemId]: newAmount}))
    }

    const checkout = () => {
        setCartItems(getDefaultCart())
    }

    const contextValue = {
        cartItems,
        getTotalCartAmount,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        checkout,
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
