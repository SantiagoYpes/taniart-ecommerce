import React, { ChangeEvent, ReactElement } from 'react'
import { CartItemType } from '../../context/CartProvider'
import { ReducerAction } from '../../context/CartProvider'
import { ReducerActionType } from '../../context/CartProvider'
import {
    ListItem,
    ListItemPrefix,
    Avatar,
    Typography, ListItemSuffix, IconButton
} from "@material-tailwind/react";
import { TrashIcon } from '@heroicons/react/24/outline';
type PropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>
    REDUCER_ACTIONS: ReducerActionType
}
export const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
    const img: string = `/img/${item.sku}.jpg`
    const lineTotal: number = (item.qty * item.price)
    const highestQty: number = 20 > item.qty ? 20 : item.qty
    const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)
    const options: ReactElement[] = optionValues.map(val => {
        return <option value={val} key={`opt${val}`}>{val}</option>
    })

    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: Number(e.target.value) }
        })
    }
    const onRemoveFromCart = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item,
    })

    const content = (
        <>
            <ListItem placeholder={"Taniart"} className=" w-full">

                <ListItemPrefix placeholder={"Taniart"} className="w-10 h-10 mr-4">
                    <Avatar placeholder={"Taniart"} variant="circular" alt="candice" src={img} />
                </ListItemPrefix>
                <div className="flex-1">
                    <Typography placeholder={"Taniart"} variant="h6" color="blue-gray">
                        {item.name}
                    </Typography>
                    <Typography placeholder={"Taniart"} variant="small" color="gray" className="font-normal">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineTotal)}
                    </Typography>
                    <label htmlFor="itemQty" className="flex-row mr-2">
                        Cantidad
                    </label>
                    <select
                        className='cart__select'
                        name="itemQty"
                        id="itemQty"
                        value={item.qty}
                        onChange={onChangeQty}
                    >{options}
                    </select>
                </div>
                <ListItemSuffix placeholder={""}>
                    <button className='cart__button' aria-label='Remove Item From Cart' title='Remove Item From Cart' onClick={onRemoveFromCart} >
                        ❌
                    </button>
                </ListItemSuffix>
            </ListItem>
        </>
    )
    return content
}
export default CartLineItem