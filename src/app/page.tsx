'use client'
import Navbar from "./navbar";
import BrandsSection from "./card";
import FeaturesAndProducts from "./features";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative bg-white z-0">
      <Navbar onHamburgerClick={() => setSidebarOpen(true)} />
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="w-128 fixed inset-0"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-10">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      <div className="z-0">
        <div className="h-[1062px] z-[-10] mt-[-100px] w-screen flex flex-col justify-center items-center bg-[url('/images/main-bg.png')] bg-cover bg-center absolute"></div>
      </div>
      <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl md:px-0 px-2 w-screen mx-auto bg-transparent">
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
