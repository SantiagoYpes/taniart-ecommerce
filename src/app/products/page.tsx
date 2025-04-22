"use client"
import React from 'react'
import ProductList from './components/ProductList'
import { ProductsProvider } from '../context/ProductsProvider'
import { NavBar } from '../components/NavBar'
const Home = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full pt-15 min-h-screen bg-black text-white font-sans">
            <NavBar />
            <div className="flex flex-col lg:flex-row w-full min-h-screen">

                <div className="w-full lg:w-1/5 bg-[#0D0F0F]  mr-2">
                    <h2 className="text-lg font-semibold mb-4">Filtros</h2>
                    
                </div>
                <ProductsProvider>
                    <ProductList />
                </ProductsProvider>
            </div>
        </div>
    )
}

export default Home
