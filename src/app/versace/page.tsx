'use client'
import React from 'react'
import HoverImage from '../components/HoverImage'
import Footer from '../footer'

function Versace() {
    return (
        <div>
            <div className="h-[600px] w-screen bg-[url('/images/versace/main-bg-2.png')] bg-cover bg-center absolute"></div>
            <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl md:px-0 px-4 w-screen mx-auto'>
                <div className="md:h-[370px] h-[200px] bg-[url('/images/versace/main-bg-1.png')] bg-cover bg-center mt-10 main-bg-shadow"></div>
                <h1 className="title z-10 font-normal text-center xl:mt-[-45px] lg:mt-[-30px] mt-[-30px] xl:text-7xl text-5xl">Versace Home</h1>
                <h2 className='mt-16 font-light text-center xl:text-3xl text-2xl'>Роскошь и Элегантность в Дизайне Интерьера</h2>
                <h3 className='mt-8 text-center font-light xl:text-2xl text-xl'>
                    Versace Home – это воплощение итальянского шика и 
                    утончённого вкуса в мире интерьерного дизайна. 
                    Сочетая элегантность, роскошь и смелые дизайнерские решения, 
                    коллекции Versace Home создают уникальную атмосферу, превращая 
                    пространство в произведение искусства.
                </h3>
                <div className='flex flex-col md:flex-row lg:gap-16 gap-8 mt-[120px]'>
                    <div className="md:h-auto h-[300px] md:w-1/2 bg-[url('/images/versace/description.png')] bg-cover bg-center image-shadow"></div>
                    <div className='flex flex-col md:w-1/2'>
                        <h2 className='font-regular xl:text-3xl text-2xl'>Утонченность</h2>
                            <h3 className='mt-6 font-light  xl:text-2xl text-xl'>
                            Каждый предмет интерьера, от мебели до текстиля 
                            и аксессуаров, несёт в себе фирменные элементы бренда: 
                            культовый узор Medusa, барочные орнаменты, насыщенные цвета 
                            и безупречное качество исполнения. Будь то эксклюзивные диваны, 
                            кровати, ковры или посуда – Versace Home предлагает коллекции, 
                            отражающие индивидуальность и утонченность.
                        </h3>
                    </div>
                </div>
                <h2 className='text-center mt-40 font-light  xl:text-3xl text-2xl'>
                    Создайте в своём доме атмосферу высокой моды 
                    вместе с Versace Home, символом непревзойдённого стиля и 
                    итальянской элегантности.
                </h2>
                <h2 className='mt-40 md:text-2xl text-xl font-regular'>ЛУЧШИЕ ТОВАРЫ</h2>
                <div className='mt-10 w-full overflow-scroll'>
                    <div className='flex gap-2 w-fit'>
                        {[1,2,3,4,5,6,7,8].map(i => 
                        <HoverImage
                            key = {i}
                            defaultSrc={`/images/versace/products/product-${i}.png`}
                            hoverSrc={`/images/versace/products/product-${i}-zoom.png`}
                            alt=''
                        />
                        )}
                    </div>
                   
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Versace
