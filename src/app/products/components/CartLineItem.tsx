import React, { ChangeEvent, ReactElement } from 'react'
import { CartItemType } from '../../context/CartProvider'
import { ReducerAction } from '../../context/CartProvider'
import { ReducerActionType } from '../../context/CartProvider'
import { ListItem, Menu, Stack } from '@mui/material'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { MenuItem } from '@mui/material'

import ListItemText from '@mui/material/ListItemText';
import { Close } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';


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
        <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img src={img} alt={item.name} className="cart__img" />
                    </Avatar>
                </ListItemAvatar>

                <ListItemText
                    primary={item.name}
                    secondary={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineTotal)}
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
        </Stack>


    )
    return content
}