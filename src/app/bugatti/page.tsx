'use client'
import React from 'react'
import HoverImage from '../components/HoverImage'
import Footer from '../footer'

function Versace() {
    return (
        <div>
            <div className="h-[600px] w-screen bg-[url('/images/bugatti/main-bg-2.png')] bg-cover bg-center absolute"></div>
            <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl md:px-0 px-4 w-screen mx-auto'>
                <div className="md:h-[370px] h-[200px] bg-[url('/images/bugatti/main-bg-1.png')] bg-cover bg-center mt-10 main-bg-shadow"></div>
                <h1 className="title z-10 font-normal text-center xl:mt-[-45px] lg:mt-[-30px] mt-[-30px] xl:text-7xl text-5xl">
                Bugatti Home
                </h1>
                <h2 className='mt-16 font-light text-center xl:text-3xl text-2xl'>
                Дизайн, Вдохновленный Скоростью и Роскошью
                </h2>
                <h3 className='mt-8 text-center font-light xl:text-2xl text-xl'>
                Bugatti Home – это коллекция мебели и предметов интерьера, воплощающая дух легендарного французского автопроизводителя. Вдохновлённая стремительностью, мощью и элегантностью гиперкаров Bugatti, эта линейка объединяет передовые технологии, эксклюзивный дизайн и безупречное мастерство исполнения.
                </h3>
                <div className='flex flex-col md:flex-row lg:gap-16 gap-8 mt-[120px]'>
                    <div className="md:h-auto h-[300px] md:w-1/2 bg-[url('/images/bugatti/description.png')] bg-cover bg-center image-shadow"></div>
                    <div className='flex flex-col md:w-1/2'>
                        <h2 className='font-regular xl:text-3xl text-2xl'>
                        Стиль
                        </h2>
                        <h3 className='mt-6 font-light  xl:text-2xl text-xl'>
                        Каждый элемент Bugatti Home — от стильных диванов и кресел до столов и светильников — создан из премиальных материалов: углеродного волокна, натуральной кожи, полированного алюминия и дерева редких пород. Дизайн коллекции отражает фирменные черты бренда: обтекаемые формы, динамичные линии и утончённые детали, напоминающие интерьер суперкаров Bugatti.
                        </h3>
                    </div>
                </div>
                <h2 className='text-center mt-40 font-light  xl:text-3xl text-2xl'>
                Произведённая в Италии, коллекция Bugatti Home сочетает в себе традиции ремесленного мастерства и инновации, создавая уникальное пространство для истинных ценителей скорости, престижа и изысканного стиля. Bugatti Home — это не просто интерьер, а выражение философии исключительности и прогресса.
                </h2>
                <h2 className='mt-40 md:text-2xl text-xl font-regular'>ЛУЧШИЕ ТОВАРЫ</h2>
                <div className='mt-10 w-full overflow-scroll'>
                    <div className='flex gap-2 w-fit'>
                        {[1,2,3,4,5,6,7,8,9,10].map(i => 
                        <HoverImage
                            key = {i}
                            defaultSrc={`/images/bugatti/products/product-${i}.png`}
                            hoverSrc={`/images/bugatti/products/product-${i}-zoom.png`}
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
