"use client"
import React from 'react'
import ProductList from './components/ProductList'
import { ProductsProvider } from '../context/ProductsProvider'
import { SidebarWithBurgerMenu } from '../components/CartDialog'
import { NavBar } from '../components/NavBar'
const Home = () => {
    return (
        <ProductsProvider>
      <div className="flex flex-col lg:flex-row w-full pt-15 min-h-screen bg-black text-white font-sans">
        <NavBar />
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          <div className="w-full lg:w-1/5 bg-[#EB00F6] mr-2 shadow-[0_0_10px_2px_rgb(236,23,252)] ">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>
          </div>
          <ProductList />
        </div>
        <SidebarWithBurgerMenu />
      </div>
      
    </ProductsProvider>

    )
}

export default Home
