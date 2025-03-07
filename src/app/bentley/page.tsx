'use client'
import React from 'react'
import HoverImage from '../components/HoverImage'
import Footer from '../footer'

function Versace() {
    return (
        <div>
            <div className="h-[600px] w-screen bg-[url('/images/bentley/main-bg-2.png')] bg-cover bg-center absolute"></div>
            <div className='xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl md:px-0 px-4 w-screen mx-auto'>
                <div className="md:h-[370px] h-[200px] bg-[url('/images/bentley/main-bg-1.png')] bg-cover bg-center mt-10 main-bg-shadow"></div>
                <h1 className="title z-10 font-normal text-center xl:mt-[-45px] lg:mt-[-30px] mt-[-30px] xl:text-7xl text-5xl">
                    Bentley Home
                </h1>
                <h2 className='mt-16 font-light text-center xl:text-3xl text-2xl'>
                    Элегантность и Престиж в Дизайне Интерьера
                </h2>
                <h3 className='mt-8 text-center font-light xl:text-2xl text-xl'>
                    Bentley Home – это воплощение безупречного стиля и роскоши, присущей легендарному автомобильному бренду Bentley. Коллекция мебели и аксессуаров для дома создана для тех, кто ценит утонченную эстетику, высокое качество и исключительное мастерство исполнения.
                </h3>
                <div className='flex flex-col md:flex-row lg:gap-16 gap-8 mt-[120px]'>
                    <div className="md:h-auto h-[300px] md:w-1/2 bg-[url('/images/bentley/description.png')] bg-cover bg-center image-shadow"></div>
                    <div className='flex flex-col md:w-1/2'>
                        <h2 className='font-regular xl:text-3xl text-2xl'>
                            Эксклюзив
                        </h2>
                        <h3 className='mt-6 font-light  xl:text-2xl text-xl'>
                            Дизайн Bentley Home отражает фирменные элементы британской марки: плавные линии, элегантные формы и использование премиальных материалов, таких как натуральное дерево, кожа, мрамор и металл. Каждая деталь интерьера – от кресел и диванов до столов и светильников – пропитана духом эксклюзивности и комфорта, характерным для автомобилей Bentley.
                        </h3>
                    </div>
                </div>
                <h2 className='text-center mt-40 font-light  xl:text-3xl text-2xl'>
                    Созданная в сотрудничестве с лучшими итальянскими мастерами, коллекция Bentley Home сочетает традиции ручной работы с инновационными технологиями, создавая уникальную атмосферу уюта и престижа. Откройте для себя мир Bentley Home – где классика встречается с современным стилем, а роскошь становится образом жизни.
                </h2>
                <h2 className='mt-40 md:text-2xl text-xl font-regular'>ЛУЧШИЕ ТОВАРЫ</h2>
                <div className='mt-10 w-full overflow-scroll'>
                    <div className='flex gap-2 w-fit'>
                        {[1,2].map(i => 
                        <HoverImage
                            key = {i}
                            defaultSrc={`/images/bentley/products/product-${i}.png`}
                            hoverSrc={`/images/bentley/products/product-${i}-zoom.png`}
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
