import React from 'react'
import useCart from '@/app/hooks/useCart'
import { List } from '@mui/material'
import { CartLineItem } from '@/app/products/components/CartLineItem'
import { Divider, Typography } from '@mui/material'
export const ListProducts = () => {
    const { dispatch, REDUCER_ACTIONS, cart, totalPrice } = useCart()
    return (
        <div className='flex flex-col gap-4 p-5'>
            <List>
                {cart.map(item => {
                    return (
                        <CartLineItem key={item.sku} item={item} REDUCER_ACTIONS={REDUCER_ACTIONS} dispatch={dispatch} />
                    )
                })}
            </List>
            <Divider />

            <Typography variant="body1">Total: {totalPrice}</Typography>
        </div>
    )
}
