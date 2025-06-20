import useCart from "../../hooks/useCart"
import { useState } from "react"
import { CartLineItem } from "./CartLineItem"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Button, Divider, List } from "@mui/material";

export const Cart = () => {
    const [confirm, setConfirm] = useState<boolean>(false)
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()
    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)
    }

    const pageContent = confirm ?
        <div className="justify-items-center p-4">
            <h2> Thank you for your order. </h2></div> :
        <div className="w-full items-center">
            {totalItems === 0 ? <div className="justify-items-center p-2">
                <Typography variant="h5">Aún no tienes items en tu bolsa</Typography>
                <Divider/></div> :

                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography color="secondary" variant='h4' component="span">Productos en tu Bolsa</Typography>
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
                </Accordion>}
            <div className="flex flex-col justify-end items-center h-full">
                <Typography variant="body1">Total: {totalPrice}</Typography>
                <div className="mt-4">
                    <Button variant="contained" color="secondary" onClick={onSubmitOrder}>
                        Finalizar La Compra
                    </Button>
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