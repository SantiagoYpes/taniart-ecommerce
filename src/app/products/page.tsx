"use client"
import React from 'react'
import ProductList from './components/ProductList'

import { FiltersDialog } from './components/FiltersDialog'
import { Toaster } from 'react-hot-toast'

const Home = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-col bg-[#232828] pt-10 w-full min-h-screen items-center">
                <Toaster></Toaster>
                <ProductList />
            </div>
        </>
    )
}

export default Home
