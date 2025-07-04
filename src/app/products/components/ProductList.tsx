"use client";
import useCart from "../../hooks/useCart"
import useProducts from "../../hooks/useProducts"
import { ReactElement } from "react"
import Product from "./Product"
import { List } from "@mui/material";
const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart()
    const { products, filteredProducts } = useProducts()
    console.log(products)
    let pageContent: ReactElement | ReactElement[] = <p> Loading...</p>

    if (products?.length) {

        pageContent = filteredProducts
            .map(product => {
                const inCart: boolean = cart.some(item => item.sku === product.sku)
                return (
                    <div key={product.sku}
                        className="transition-transform duration-300 hover:scale-105"
                    >
                        <Product key={product.sku} product={product} dispatch={dispatch} REDUCER_ACTIONS={REDUCER_ACTIONS} inCart={inCart} />
                    </div>


                )
            })


    }
    const content = (

        <main className="bg-[#232828] p-5 pt-10 ">
            <List sx={{
                width: '100%', flexWrap: 'wrap',
                gap: 3, display: 'flex', justifyContent:'center'
            }}>
                {pageContent}
            </List>

        </main>
    )
    return content
}

export default ProductList