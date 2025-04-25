import useCart from "../../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { List } from "@mui/material";

export const Cart = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    const [confirm, setConfirm] = useState<boolean>(false)
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()
    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)
    }

    const pageContent = confirm ? <h2> Thank you for your order. </h2> :
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Productos en tu Bolsa</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {cart.map(item => {
                            return (
                                <CartLineItem key={item.sku} item={item} REDUCER_ACTIONS={REDUCER_ACTIONS} dispatch={dispatch} />
                            )
                        })}
                    </List>
                </AccordionDetails>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />

            <div>
                <p>Total Items :{totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <div className="mt-4">
                    <button color="red" onClick={onSubmitOrder}>
                        Confirmar Compra
                    </button>
                </div>

            </div>
        </div>
    const content = (<>
        {pageContent}
    </>
    )
    return content
}

export default Cart