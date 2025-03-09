import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-40 mb-16">
      <section className="text-center mb-16">
        <h2 className="md:text-xl text-lg mb-4 font-light">Наши преимущества</h2>
        <p className="font-regular md:text-2xl text-lg max-w-4xl mx-auto mb-6">
          Только оригинальная мебель от известных брендов, доступная стоимость и
          безупречный сервис. Solaro Luxe — создаём комфорт и роскошь для
          вашего дома!
        </p>
        <button className="px-6 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition">
          <a href="http://wa.me/77779276255">ОФОРМИТЬ ЗАКАЗ</a>
        </button>
      </section>

      
      <div className="mt-40 grid grid-cols-3 gap-6 text-sm text-gray-800">
        <div>
          <h3 className="font-semibold mb-3">БРЕНДЫ</h3>
          <div className="flex flex-col gap-2">
            <Link href='/versace'>Versace Home</Link>
            <Link href='/dolce'>Dolce & Gabbana Casa</Link>
            <Link href='/bentley'>Bentley Home</Link>
            <Link href='/bugatti'>Bugatti Home</Link>
            <Link href='/trussardi'>Trussardi Casa</Link>
          </div>
        </div>


        <div>
          <h3 className="font-semibold mb-3">КОНТАКТЫ</h3>
          <ul className="space-y-1">
            <li>+7 (777) 927 62 55</li>
            <li><a href="https://www.instagram.com/solaro_luxe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">instagram</a></li>
            <li><a href="http://t.me/77779276255">telegram</a></li>
            <li><a href="http://wa.me/77779276255">whatsapp</a></li>
          </ul>
        </div>
        
        <div></div>
        <div className="text-xs text-gray-500 mt-6">
          ©2024 Solaro Luxe. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;
