"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <div
      className="relative overflow-hidden w-[330px] h-[330px] rounded-sm"
    >
      <motion.div
        key="default"
        whileHover={{ scale:1.2, opacity:0 }}
        transition={{ duration: 0.1 }}
        className="absolute inset-0"
      >
        <Image
          src={defaultSrc}
          alt={alt}
          width={330}
          height={330}
          className="object-cover w-full h-full"
          key = {2}
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </motion.div>
      <Image
        src={hoverSrc}
        alt={alt}
        width={330}
        height={330}
        key = {1}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

// const HoverImage: React.FC<HoverImageProps> = ({
//   defaultSrc,
//   hoverSrc,
//   alt,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative overflow-hidden w-[330px] h-[330px] rounded-sm"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence mode="wait">
//         {!isHovered ? (
//           <motion.div
//             key="default"
//             initial={{ scale:1 }}
//             exit={{ scale:1.1 }}
//             transition={{ duration: 0.2 }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={defaultSrc}
//               alt={alt}
//               width={330}
//               height={330}
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 bg-black/5"></div>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="hover"
//             initial={{ scale:1.1 }}
//             exit={{ scale:1}}
//             transition={{ duration: 0.2 }}
//             className="absolute inset-0"
//           >
//             <Image
//               src={hoverSrc}
//               alt={alt}
//               width={330}
//               height={330}
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 bg-black/5"></div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

export default HoverImage;