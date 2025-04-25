"use client";
import useCart from "../../hooks/useCart"
import useProducts from "../../hooks/useProducts"
import { ReactElement } from "react"
import Product from "./Product"
const ProductList = () => {
    const {dispatch,REDUCER_ACTIONS, cart} = useCart()
    const {products} =useProducts()
    console.log(products)
    let pageContent: ReactElement | ReactElement[]  = <p> Loading...</p>
    
    if (products?.length) {
        
        pageContent = products.map(product =>{
            const inCart: boolean = cart.some(item => item.sku === product.sku)

            return (
                <Product key={product.sku} product={product} dispatch={dispatch} REDUCER_ACTIONS ={REDUCER_ACTIONS} inCart ={inCart} />
            )
        })    
    }
    const content = (
        <main className="w-full grid grid-cols-1 bg-[#232828] pt-5 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-10 justify-items-center">
            {pageContent}
        </main>
    )
  return content
}

export default ProductList