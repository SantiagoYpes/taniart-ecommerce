import useCart from "../../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"
import {
    Typography,
    ListItem,
    ListItemPrefix,
    Accordion, Button,
    AccordionHeader,
    AccordionBody,

} from "@material-tailwind/react";
import {
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
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
        <>
            <Accordion placeholder={"Taniart"}
                open={open === 2}
                icon={
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                            }`}
                    />
                }
            >
                <ListItem placeholder={"Taniart"} className="p-0" selected={open === 2}>
                    <AccordionHeader placeholder={"Taniart"}
                        onClick={() => handleOpen(2)}
                        className="border-b-0 p-3"
                    >
                        <ListItemPrefix placeholder={"Taniart"}>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography placeholder={"Taniart"} color="blue-gray" className="mr-auto font-normal">
                            Prendas en tu Bolsa
                        </Typography>
                    </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                    {cart.map(item => {
                        return (
                            <CartLineItem
                                key={item.sku} item={item} dispatch={dispatch} REDUCER_ACTIONS={REDUCER_ACTIONS} />
                        )
                    })}

                </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />

            <div>
                <p>Total Items :{totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <div className="mt-4">
                    <Button placeholder={""} color="red" onClick={onSubmitOrder}>
                        Confirmar Compra
                    </Button>
                </div>

            </div>
        </>
    const content = (<>
        {pageContent}
    </>
    )
    return content
}

export default Cart