"use client"
import React from 'react'
import ProductList from './components/ProductList'
import { ProductsProvider } from '../context/ProductsProvider'
import { NavBar } from '../components/NavBar'
const Home = () => {
    return (
            <div className="flex flex-col lg:flex-row w-full pt-20 min-h-screen  font-sans">
                <NavBar />
                <div className="flex flex-col lg:flex-row bg-black w-full min-h-screen">
                    <div className="w-full lg:w-1/5  mr-2">
                        <h2 className="text-lg font-semibold text-white mb-4">Filtros</h2>
                    </div>
                    <ProductList />
                </div>
            </div>
    )
}

export default Home
