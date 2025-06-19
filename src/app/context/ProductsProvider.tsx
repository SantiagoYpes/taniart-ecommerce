"use client";
import { createContext, ReactElement, useEffect, useState, Dispatch, SetStateAction } from "react"

export type ProductType = {
    sku: string,
    name: string,
    collection: string
    price: number,
}

export type FiltersType = {
    collection: string[],
    minPrice: number
    maxPrice: number
}


const initState: ProductType[] = []

export type UseProductsContextType = {
    products: ProductType[], filteredProducts: ProductType[],
    filters: FiltersType,
    setFilters: Dispatch<SetStateAction<FiltersType>>
}

const initFilters: FiltersType = {
    collection: [],
    minPrice: 0,
    maxPrice: 200
}

const initContextState: UseProductsContextType = {
    products: [],
    filteredProducts: [],
    filters: initFilters,
    setFilters: () => { }
}


const ProductContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(initState)
    const [filters, setFilters] = useState<FiltersType>(initFilters)

    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3500/products')
                .then(res => res.json())
                .catch(err => {
                    if (err instanceof Error) console.log(err.message)
                    return []
                })
            return data
        }

        fetchProducts().then(products => setProducts(products))
    }, [])

    useEffect(() => {
        let result = [...products]
        if (filters.collection.length > 0) {
            result = result.filter(p => filters.collection.includes(p.collection))
        }
        if (filters.minPrice) {
            result = result.filter(p => p.price >= filters.minPrice)
        }
        if (filters.maxPrice) {
            result = result.filter(p => p.price <= filters.maxPrice)
        }
        setFilteredProducts(result)
    }, [products, filters])

    return (
        <ProductContext.Provider value={{ products, filteredProducts, filters, setFilters }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext