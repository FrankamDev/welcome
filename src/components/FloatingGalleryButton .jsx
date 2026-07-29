// import { motion } from "framer-motion";
// import { Images, Heart, Home } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// export default function FloatingGalleryButton() {
//   const location = useLocation();
//   const isGalleryPage = location.pathname === "/gallery";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -30, scale: 0.9 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed top-5 right-4 sm:right-6 z-[9999]"
//     >
//       <Link
//         to={isGalleryPage ? "/" : "/gallery"}
//         className="
//           group relative
//           flex items-center gap-2.5 sm:gap-3
//           rounded-full
//           bg-white/85
//           backdrop-blur-md
//           border border-amber-200/60
//           px-4 py-2.5 sm:px-6 sm:py-3.5
//           shadow-[0_8px_30px_rgb(0,0,0,0.12)]
//           text-amber-900
//           font-serif
//           font-medium
//           text-sm sm:text-base
//           tracking-wide
//           transition-all duration-400
//           hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-50
//           hover:border-amber-300
//           hover:shadow-[0_12px_40px_rgba(180,83,9,0.18)]
//           hover:-translate-y-0.5
//           active:scale-[0.98]
//         "
//       >
//         {/* Icône qui change selon la page */}
//         <motion.div
//           key={isGalleryPage ? "home" : "gallery"}
//           initial={{ scale: 0.6, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           className="relative"
//         >
//           {isGalleryPage ? (
//             <Home
//               size={20}
//               className="text-amber-700 group-hover:text-amber-800 transition-colors"
//               strokeWidth={1.8}
//             />
//           ) : (
//             <>
//               <motion.div
//                 animate={{ scale: [1, 1.15, 1] }}
//                 transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
//               >
//                 <Heart
//                   size={18}
//                   className="text-rose-400 fill-rose-300/70 group-hover:fill-rose-400 transition-colors"
//                 />
//               </motion.div>
//             </>
//           )}
//         </motion.div>

//         {/* Icône Images uniquement quand on n'est pas sur la galerie */}
//         {!isGalleryPage && (
//           <Images
//             size={20}
//             className="text-amber-700 group-hover:text-amber-800 transition-colors"
//             strokeWidth={1.8}
//           />
//         )}

//         {/* Texte qui change dynamiquement */}
//         <motion.span
//           key={isGalleryPage ? "accueil" : "galerie"}
//           initial={{ opacity: 0, y: 6 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.25 }}
//           className="hidden sm:inline font-medium"
//         >
//           {isGalleryPage ? "Retour à l'accueil" : "Voir la Galerie"}
//         </motion.span>

//         {/* Version mobile */}
//         <motion.span
//           key={isGalleryPage ? "accueil-mobile" : "galerie-mobile"}
//           initial={{ opacity: 0, y: 6 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.25 }}
//           className="sm:hidden font-medium text-[13px]"
//         >
//           {isGalleryPage ? "Accueil" : "Galerie"}
//         </motion.span>

//         {/* Effet de brillance au hover */}
//         <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
//         </div>
//       </Link>
//     </motion.div>
//   );
// }





import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Images, Heart, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function FloatingGalleryButton() {
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolling(true);
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  });

  // Plus d'étoiles + plus grandes
  const stars = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 8, // beaucoup plus grandes
    top: `${Math.random() * 120 - 10}%`,
    left: `${Math.random() * 120 - 10}%`,
    delay: Math.random() * 2,
    duration: 1.4 + Math.random() * 1.6,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: -30, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0], // ← flotte à l'infini
        scale: 1,
      }}
      transition={{
        opacity: { delay: 1.2, duration: 0.7 },
        scale: { delay: 1.2, duration: 0.7 },
        y: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="fixed top-5 right-4 sm:right-6 z-[9999]"
    >
      {/* Conteneur des étoiles (plus visibles) */}
      <div className="absolute -inset-10 pointer-events-none overflow-visible">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]"
            style={{
              top: star.top,
              left: star.left,
              fontSize: star.size,
            }}
            animate={{
              opacity: isScrolling
                ? [0.4, 1, 0.5, 1, 0.4]
                : [0.35, 0.95, 0.4, 0.9, 0.35],
              scale: isScrolling
                ? [0.7, 1.5, 0.9, 1.4, 0.7]
                : [0.8, 1.25, 0.9, 1.15, 0.8],
              rotate: [0, 120, 240, 360],
            }}
            transition={{
              duration: isScrolling ? star.duration * 0.65 : star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <Link
        to={isGalleryPage ? "/" : "/gallery"}
        className="
          group relative
          flex items-center gap-2.5 sm:gap-3
          rounded-full
          bg-white/90
          backdrop-blur-md
          border border-amber-200/70
          px-4 py-2.5 sm:px-6 sm:py-3.5
          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          text-amber-900
          font-serif
          font-medium
          text-sm sm:text-base
          tracking-wide
          transition-all duration-400
          hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-50
          hover:border-amber-300
          hover:shadow-[0_12px_40px_rgba(180,83,9,0.18)]
          hover:-translate-y-0.5
          active:scale-[0.98]
        "
      >
        <motion.div
          key={isGalleryPage ? "home" : "gallery"}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {isGalleryPage ? (
            <Home
              size={20}
              className="text-amber-700 group-hover:text-amber-800 transition-colors"
              strokeWidth={1.8}
            />
          ) : (
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart
                size={18}
                className="text-rose-400 fill-rose-300/70 group-hover:fill-rose-400 transition-colors"
              />
            </motion.div>
          )}
        </motion.div>

        {!isGalleryPage && (
          <Images
            size={20}
            className="text-amber-700 group-hover:text-amber-800 transition-colors"
            strokeWidth={1.8}
          />
          
        )}

        <motion.span
          key={isGalleryPage ? "accueil" : "galerie"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="hidden sm:inline font-medium"
        >
          {isGalleryPage ? "Retour à l'accueil" : "Voir la Galerie"}
        </motion.span>

        <motion.span
          key={isGalleryPage ? "accueil-mobile" : "galerie-mobile"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="sm:hidden font-medium text-[13px]"
        >
          {isGalleryPage ? "Accueil" : "Galerie"}
        </motion.span>

        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </div>
      </Link>
    </motion.div>
  );
}