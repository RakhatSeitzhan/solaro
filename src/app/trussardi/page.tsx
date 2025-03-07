'use client'
import React from 'react'
import HoverImage from '../components/HoverImage'
import Footer from '../footer'

function Versace() {
    return (
        <div>
            <div className="h-[600px] w-screen bg-[url('/images/trussardi/main-bg-2.png')] bg-cover bg-center absolute"></div>
            <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl md:px-0 px-4 w-screen mx-auto'>
                <div className="md:h-[370px] h-[200px] bg-[url('/images/trussardi/main-bg-1.png')] bg-cover bg-center mt-10 main-bg-shadow"></div>
                <h1 className="title z-10 font-normal text-center xl:mt-[-45px] lg:mt-[-30px] mt-[-30px] xl:text-7xl text-5xl">
                Trussardi Casa
                </h1>
                <h2 className='mt-16 font-light text-center xl:text-3xl text-2xl'>
                Итальянская Элегантность в Дизайне Интерьера
                </h2>
                <h3 className='mt-8 text-center font-light xl:text-2xl text-xl'>
                Trussardi Casa – это коллекция мебели и предметов интерьера, воплощающая философию итальянского бренда Trussardi: утончённый стиль, комфорт и современный подход к дизайну.
                </h3>
                <div className='flex flex-col md:flex-row lg:gap-16 gap-8 mt-[120px]'>
                    <div className="md:h-auto h-[300px] md:w-1/2 bg-[url('/images/trussardi/description.png')] bg-cover bg-center image-shadow"></div>
                    <div className='flex flex-col md:w-1/2'>
                        <h2 className='font-regular xl:text-3xl text-2xl'>
                        Элегантность
                        </h2>
                        <h3 className='mt-6 font-light  xl:text-2xl text-xl'>
                        Каждое изделие Trussardi Casa сочетает в себе элегантные формы, натуральные материалы и безупречное качество исполнения. Диваны, кресла, столы, кровати и аксессуары выполнены в сдержанных тонах с акцентом на изысканные детали, создавая уютную и стильную атмосферу в интерьере.
                        </h3>
                    </div>
                </div>
                <h2 className='text-center mt-40 font-light  xl:text-3xl text-2xl'>
                Коллекция вдохновлена динамичной городской жизнью Милана, сочетая традиции итальянского мастерства с современными трендами. Trussardi Casa – это выбор тех, кто ценит изысканный минимализм, комфорт и неподвластную времени элегантность
                </h2>
                <h2 className='mt-40 md:text-2xl text-xl font-regular'>ЛУЧШИЕ ТОВАРЫ</h2>
                <div className='mt-10 w-full overflow-scroll'>
                    <div className='flex gap-2 w-fit'>
                        {[1,2,3,4,5].map(i => 
                        <HoverImage
                            key = {i}
                            defaultSrc={`/images/trussardi/products/product-${i}.png`}
                            hoverSrc={`/images/trussardi/products/product-${i}-zoom.png`}
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
