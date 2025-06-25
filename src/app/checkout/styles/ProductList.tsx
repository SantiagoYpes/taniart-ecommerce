import React from 'react'
import useCart from '@/app/hooks/useCart'
import { List } from '@mui/material'
import { CartLineItem } from '@/app/products/components/CartLineItem'
export const ListProducts = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    return (
        <List>
            {cart.map(item => {
                return (
                    <CartLineItem key={item.sku} item={item} REDUCER_ACTIONS={REDUCER_ACTIONS} dispatch={dispatch} />
                )
            })}
        </List>
    )
}
