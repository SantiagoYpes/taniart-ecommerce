import React, { ReactElement } from 'react'
import { CartItemType, ReducerAction, ReducerActionType } from '../../context/CartProvider'
import { ListItem, MenuItem } from '@mui/material'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ListItemText from '@mui/material/ListItemText';
import { Close } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

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
        return <MenuItem value={val} key={`opt${val}`}>{val}</MenuItem>
    })

    const onChangeQty = (e: SelectChangeEvent) => {
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
        <ListItem sx={{gap:3}}>
            <ListItemAvatar>
                <Avatar>
                    <img src={img} alt={item.name} className="cart__img" />
                </Avatar>
            </ListItemAvatar>

            <ListItemText
                primary={item.name}
                secondary={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}
            />
            <Select value={item.qty.toString()} size='small' onChange={onChangeQty}>
                {options}
            </Select>
            <div aria-label="Line Item Subtotal" className="cart__item-subtotal">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineTotal)}
            </div>

            <IconButton edge="end" aria-label="delete" >
                <Close color='error' onClick={onRemoveFromCart} />
            </IconButton>
        </ListItem>



    )
    return content
}