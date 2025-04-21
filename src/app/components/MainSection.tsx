import React from 'react'
import { MainSlider } from './MainSlider'
export const MainSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-8 md:px-20 py-12 md:py-24">
          <div className="md:w-1/2 space-y-15">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Redefiniendo el estilo con cada detalle, una prenda a la vez.
            </h1>
            <p className="text-sm text-gray-300">
              Reciba actualizaciones exclusivas sobre el lanzamiento de nuevas colecciones, comunicaciones personalizadas y las últimas noticias de la Marca.
            </p>
            <button className="bg-white text-black px-6 py-2 text-sm font-medium">REGISTRATE</button>
          </div>

          <div className="w-[500px] h-[450px] mt-12 md:mt-0 flex justify-center shadow-[0_0_20px_2px_rgb(236,23,252)]" style={{ marginLeft: '14rem' }}>
            <MainSlider />
          </div>
        </section>
  )
}
