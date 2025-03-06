"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HoverImageProps {
  defaultSrc: string;
  hoverSrc: string;
  alt: string;
}

const HoverImage: React.FC<HoverImageProps> = ({
  defaultSrc,
  hoverSrc,
  alt,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden w-[330px] h-[330px] rounded-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.div
            key="default"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0"
          >
            <Image
              src={defaultSrc}
              alt={alt}
              width={330}
              height={330}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </motion.div>
        ) : (
          <motion.div
            key="hover"
            initial={{ opacity: 0.5}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.5}}
            transition={{ duration: 0.1 }}
            className="absolute inset-0"
          >
            <Image
              src={hoverSrc}
              alt={alt}
              width={330}
              height={330}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverImage;