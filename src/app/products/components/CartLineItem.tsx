import React, { ChangeEvent, ReactElement } from 'react'
import { CartItemType } from '../../context/CartProvider'
import { ReducerAction } from '../../context/CartProvider'
import { ReducerActionType } from '../../context/CartProvider'
import { ListItem } from '@mui/material'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Single-line item"
                    secondary={'Secondary text'}
                />
            </ListItem>

        </>
    )
    return content
}
export default CartLineItem