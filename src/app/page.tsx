'use client'

import BrandsSection from "./card";
import FeaturesAndProducts from "./features";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="">
      <div className="h-[1062px] z-[-10] mt-[-100px] w-screen bg-[url('/images/main-bg.png')] bg-cover bg-center"></div>
      
      <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl md:px-0 px-4 w-screen mx-auto bg-transparent mt-[-1000px]">
        <h1 className="md:text-4xl text-2xl font-sans text-center mt-[370px] mb-[300px]">
          Гармония стиля и комфорта в каждом элементе
        </h1>

        <div className="text-xl md:text-2xl leading-relaxed max-w-[724px] py-[120px]">
          “Solaro Luxe” — салон брендовой мебели, где стиль и качество
          становятся доступными. Мы предлагаем изысканные коллекции
          премиум-класса, которые подчеркнут индивидуальность вашего интерьера,
          по ценам, приятным для вашего бюджета.
        </div>
  
        <section className="bg-white">
          <h2 className="md:text-2xl text-xl font-medium mb-10">Бренды</h2>
          <div className="w-full overflow-hidden">
            <div className="flex gap-6 overflow-x-auto snap-x scroll-smooth w-full">
              <BrandsSection />
            </div>
          </div>
        </section>

        <h2 className="md:text-2xl text-xl font-medium mt-[120px]">ЛУЧШИЕ ПРОДУКТЫ</h2>
        <FeaturesAndProducts />
        <Footer />
      </div>
    </div>
  );
}
