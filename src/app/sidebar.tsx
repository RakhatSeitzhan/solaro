'use client';
import React from 'react';
import Link from 'next/link';
type SidebarProps = {
  onClose: () => void;
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ onClose, isOpen }) => {
  return (
    <aside className="w-[350px] fixed min-h-screen bg-gray bg-opacity-30 backdrop-blur-md text-white bg-black px-10 py-8 z-[1000]">
      <div className="flex flex-col h-full z-[1500]">
        <div className="mb-10 z-100">
          <img src="/images/logo-white.png" alt="logo" className='max-w-32'/>
        </div>

        <div className="mb-8 z-100">
          <h3 className="mb-2 font-semibold uppercase">Бренды</h3>
          <ul className="space-y-1 border-l border-white pl-6">
            <li>
              <Link onClick={onClose} href="/versace" className="hover:text-gray-300">
                Versace Home
              </Link>
            </li>
            <li>
              <Link onClick={onClose} href="/dolce" className="hover:text-gray-300">
                Dolce & Gabbana Casa
              </Link>
            </li>
            <li>
              <Link onClick={onClose} href="/bentley" className="hover:text-gray-300">
                Bentley Home
              </Link>
            </li>
            <li>
              <Link onClick={onClose} href="/bugatti" className="hover:text-gray-300">
                Bugatti Home
              </Link>
            </li>
            <li>
              <Link onClick={onClose} href="/trussardi" className="hover:text-gray-300">
                Trussardi Casa
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-8 z-100">
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
              <a href="tel:+77779276255" className="hover:text-gray-300">
                +7 (777) 927 62 55
              </a>
            </li>
            <li>
              <a href="mailto:example@example.com" className="hover:text-gray-300">
                solaroluxecasa@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {isOpen && (
        <div
          className="fixed absolute w-screen inset-0 ml-[100%]"
          onClick={onClose}
        />
      )}
    </aside>
  );
};

export default Sidebar;
