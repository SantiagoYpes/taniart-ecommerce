
import { ProductType } from "../../context/ProductsProvider"
import { ReducerActionType, ReducerAction } from "../../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
    const img: string = `/img/${product.sku}.jpg`
    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })
    const itemInCart = inCart ? '-> Item in Car ✔️' : null
    return (
        <Card placeholder="Card" className="w-50 bg-[#0D0D0D] rounded-lg sm:w-50 md:w-25 lg:w-[300px] p-4 m-5 shadow-[0_0_10px_2px_rgb(236,23,252)]">
            <CardHeader placeholder="CardHeader" shadow={false} floated={false} className="h-80 mb-5">
                <img
                    src={img}
                    alt={product.name}
                    className="h-90 w-full object-cover"
                />
            </CardHeader>
            <CardBody placeholder="CardBody">
                <div className="mb-2 flex items-center justify-between">
                    <Typography placeholder={"Product"} color="white" className="font-medium">
                        {product.name}
                    </Typography>
                    <Typography placeholder={"Price"} color="white" className="font-medium">
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)} {itemInCart}
                    </Typography>
                </div>
                <Typography placeholder="Description"
                    variant="small"
                    color="white"
                    className="font-normal opacity-80"
                >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                </Typography>
            </CardBody>
            <CardFooter placeholder="CardFooter" className="flex justify-center pt-4">
                <Button
                    placeholder="Add to cart"
                    ripple={false}
                    onClick={onAddToCart}
                    className="bg-white text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 text-xs px-6 py-2 rounded-none"
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

export default Product