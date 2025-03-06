import React from "react";
import Link from 'next/link'

interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  link: string;
}
const Card: React.FC<CardProps> = ({ image, title, subtitle, link }) => {

  return (
    <Link 
      href={link} 
      className='relative md:w-[550px] md:h-[550px] aspect-square overflow-hidden rounded-md main-bg-shadow flex-shrink-0 bg-cover bg-center'
    >
      <div className="text-white text-center absolute z-10 flex flex-col justify-center items-center w-full h-full">
        <h2 className="md:text-4xl text-3xl font-bold uppercase  ">{title}</h2>
        {subtitle && <p className="text-xl mt-1 z-10">{subtitle}</p>}
      </div>
      <img src={image} alt={title} className="w-full h-full object-cover brightness-50"/>
    </Link>
  );
};


const BrandsSection: React.FC = () => {
  return (
    <section className="bg-white w-full">
      <div className="flex md:flex-row flex-col md:overflow-x-auto md:snap-x md:scroll-smooth gap-2 w-full">
        <Card image="/images/versace-grid.png" link="versace" title="VERSACE" subtitle="Home" buttonText="LEARN MORE >" />
        <Card image="/images/dolce-grid.png"  link="dolce" title="DOLCE & GABBANA" subtitle="CASA" buttonText="LEARN MORE >" />
        <Card image="/images/bentley-grid.webp" link="bentley" title="BENTLEY" subtitle="Home" buttonText="LEARN MORE >" />
        <Card image="/images/bugatti-grid.jpeg" link="bugatti" title="BUGATTI" subtitle="Home" buttonText="LEARN MORE >" />
        <Card image="/images/trussardi-grid.png" link="trussardi" title="TRUSSARDI" subtitle="CASA" buttonText="LEARN MORE >" />
      </div>
    </section>
  );
};

export default BrandsSection;
