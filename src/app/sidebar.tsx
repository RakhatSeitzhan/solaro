'use client';
import React from 'react';
import Link from 'next/link';
type SidebarProps = {
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <aside className="md:w-[350px] w-full min-h-screen bg-gray bg-opacity-30 backdrop-blur-md text-white bg-black px-10 py-8 relative">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close sidebar"
        className="absolute top-4 right-4 text-white md:hidden"
      >
        ✕
      </button>

      {/* Logo / Brand */}
      <div className="mb-10">
        <img src="/images/logo-white.png" alt="logo" className='max-w-32'/>
      </div>

      {/* Brands */}
      <div className="mb-8">
        <h3 className="mb-2 font-semibold uppercase">Бренды</h3>
        <ul className="space-y-1 border-l border-white pl-6">
          <li>
            <Link href="/versace" className="hover:text-gray-300">
              Versace Home
            </Link>
          </li>
          <li>
            <Link href="/dolce" className="hover:text-gray-300">
              Dolce & Gabbana Casa
            </Link>
          </li>
          <li>
            <Link href="/bentley" className="hover:text-gray-300">
              Bentley Home
            </Link>
          </li>
          <li>
            <Link href="/bugatti" className="hover:text-gray-300">
              Bugatti Home
            </Link>
          </li>
          <li>
            <Link href="/trussardi" className="hover:text-gray-300">
              Trussardi Casa
            </Link>
          </li>
        </ul>
      </div>

      {/* Contacts */}
      <div className="mb-8">
        <h3 className="mb-2 font-semibold uppercase">Контакты</h3>
        <ul className="space-y-1 border-l border-white pl-6">
          <li>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a href="tel:+77771112233" className="hover:text-gray-300">
              +7 777 111 22 33
            </a>
          </li>
          <li>
            <a href="mailto:example@example.com" className="hover:text-gray-300">
              example@example.com
            </a>
          </li>
        </ul>
      </div>

      {/* Address */}
      <div>
        <h3 className="mb-2 font-semibold uppercase">Адрес</h3>
        <p>Алматы, Богенбай батыра, 71</p>
      </div>
    </aside>
  );
};

export default Sidebar;
