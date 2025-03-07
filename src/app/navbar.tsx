'use client';
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
type NavbarProps = {
  onHamburgerClick: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onHamburgerClick }) => {
  return (
    <nav className="pt-4 md:h-[100px] h-[50px] md:px-0 px-4 bg-transparent hover:bg-white hover:bg-opacity-40 transition z-100">
      <div className='mx-auto flex  items-center xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl  z-10'>
        <div className="w-1/3 flex justify-start" onClick={onHamburgerClick}>
          <IoIosMenu size={30} />
        </div>

        <div className="w-1/3 flex justify-center">
          <Link href="/">
            <img src="/logo.svg" alt="Logo" className="logo-img md:h-[60px] h-[50px]" />
          </Link>
        </div>

        <div className="w-1/3 flex justify-end">

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
