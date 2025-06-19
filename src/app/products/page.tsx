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
                <div className="sticky top-17  z-50 p-4">
                    <FiltersDialog/>
                </div>
                <ProductList />
            </div>
        </>
    )
}

export default Home
