"use client"
import React from 'react'
import ProductList from './components/ProductList'
import { Button } from '@mui/material'
import { Tune } from '@mui/icons-material'

const Home = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-col bg-[#232828] pt-17 w-full min-h-screen">
                <div className="sticky top-17  z-50 p-4 justify-items-center">
                    <Button variant='outlined' sx={{
                        color: 'white',
                        borderColor: 'white',
                    }} startIcon={<Tune />}>Filtros</Button>
                </div>
                <ProductList />
            </div>
        </>
    )
}

export default Home
