"use client"
import React from 'react'
import ProductList from './components/ProductList'

const Home = () => {
    return (

                <div className="flex flex-col lg:flex-row pt-20 bg-black w-full min-h-screen">
                    <div className="w-full lg:w-1/5  mr-2">
                        <h2 className="text-lg font-semibold text-white mb-4">Filtros</h2>
                    </div>
                    <ProductList />
                </div>
    )
}

export default Home
