
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  // Variantes pour les animations de texte (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 1.8, ease: "easeOut" } 
    },
  };

  return (
    <motion.section

      initial="hidden"
      animate="visible"
      className="relative -mt-42 min-h-screen bg-[url('/cool1.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden"
    >
      <motion.div
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 1.2, duration: 0.8 }}
  className="absolute top-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 flex justify-center"
>
  <Link
    to="/gallery"
    className="
      inline-flex items-center gap-3
      rounded-full
      border-2 border-white/40
      bg-white/15 backdrop-blur-md
      px-8 py-4
      text-lg sm:text-2xl md:text-3xl
      font-bold tracking-wide
      text-cyan-950
      shadow-2xl
      transition-all duration-300
      hover:scale-105
      hover:bg-white
      hover:text-gray-900
      hover:border-white
    "
  >
    📸 Voir la galerie
  </Link>
</motion.div>
      <div className="absolute inset-0 pointer-events-none bg-black/60">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-2 h-2 bg-orange-200/40 rounded-full blur-sm"
            style={{ left: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div 
        variants={containerVariants}
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center"
      >
        
        
        <motion.div 
          variants={photoVariants}
          whileHover={{ scale: 1.02 }}
          className="relative group mb-12"
        >
          <div className="relative mt-[32rem] w-64 h-80 sm:w-80 sm:h-[32rem] rounded-t-full overflow-hidden shadow-2xl border-[12px] border-white">
            <img
              src="/b1.jpeg"
              alt="Mariage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
         
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-6 -right-4 bg-white p-4 shadow-xl rounded-lg rotate-3"
            >
             <p className="font-serif-premium text-gray-800 font-bold tracking-widest text-sm uppercase">Samedi</p>
             <p className="font-serif-premium text-2xl text-amber-800">11 Avril 2026</p>
            <Link to='/gallery'>Gallery</Link>
          </motion.div>
        </motion.div>

        <div className="text-center space-y-6">
          <motion.h2 variants={itemVariants} className="font-serif-premium text-lg tracking-[0.3em] text-gray-300 uppercase">
            Célébration de l'Union
          </motion.h2>
          
          <motion.h1 variants={itemVariants} className="font-script text-7xl sm:text-9xl text-gray-300 my-4 drop-shadow-sm">
            Clémence <span className="text-4xl sm:text-6xl align-middle font-serif-premium italic">&</span> Elias
          </motion.h1>

         
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 my-8">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "8rem" }} 
              transition={{ delay: 2, duration: 1.5 }}
              className="h-[1px] bg-gradient-to-r from-transparent to-gray-400" 
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="text-red-300 fill-red-300 w-6 h-6" />
            </motion.div>
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "8rem" }} 
              transition={{ delay: 2, duration: 1.5 }}
              className="h-[1px] bg-gradient-to-l from-transparent to-gray-400" 
            />
          </motion.div>

          <motion.p variants={itemVariants} className="font-serif-premium italic text-xl sm:text-3xl text-gray-400 max-w-xl mx-auto leading-relaxed px-4">
            "Deux âmes, un seul cœur, un chemin qui commence..."
          </motion.p>

          <motion.p variants={itemVariants} className="font-lora text-yellow-200 tracking-wide pt-4">
            BAFOUSSAM, BELLE VUE, 11 AVRIL 2026
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="font-serif-premium text-xs tracking-widest uppercase">Découvrir</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" 
          />
        </motion.div>
      </motion.div>

      {/* Overlay Texture Papier */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
    </motion.section>
  );
}

export default Hero;




// import { motion } from 'framer-motion';
// import { Heart } from 'lucide-react';
// import './hero.css';
// import { Link } from 'react-router-dom';

// function Hero() {
//   // Variantes pour les animations de texte (Stagger effect)
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.5,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: "blur(0px)",
//       transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
//     },
//   };

//   const photoVariants = {
//     hidden: { opacity: 0, scale: 0.9, rotate: -2 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: { duration: 1.8, ease: "easeOut" }
//     },
//   };

//   return (
//     <motion.section
//       initial="hidden"
//       animate="visible"
//       className="relative -mt-42 min-h-screen bg-[url('/cool1.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden"
//     >
//       {/* ========== LIEN GALERIE EN HAUT (BIEN VISIBLE) ========== */}
//       <div className="absolute top-6 left-0 right-0 z-11130 flex justify-center px-4">
//         <Link
//           to="/gallery"
//           className="
//             inline-block
//             px-6 py-3
//             sm:px-8 sm:py-4
//             bg-white/90 backdrop-blur-sm
//             text-amber-900
//             font-serif-premium
//             text-lg sm:text-xl md:text-2xl
//             font-bold
//             tracking-wide
//             rounded-full
//             shadow-xl
//             border-2 border-amber-200
//             hover:bg-amber-50
//             hover:scale-105
//             active:scale-95
//             transition-all duration-300
//             text-center
//           "
//         >
//           Accéder à la Galerie
//         </Link>
//       </div>

//       {/* Overlay sombre + particules */}
//       <div className="absolute inset-0 pointer-events-none bg-black/60">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="particle absolute w-2 h-2 bg-orange-200/40 rounded-full blur-sm"
//             style={{ left: `${Math.random() * 100}%` }}
//             animate={{
//               y: [0, -1000],
//               x: [0, Math.random() * 50 - 25],
//               opacity: [0, 0.6, 0],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       <motion.div
//         variants={containerVariants}
//         className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center"
//       >
//         <motion.div
//           variants={photoVariants}
//           whileHover={{ scale: 1.02 }}
//           className="relative group mb-12"
//         >
//           <div className="relative mt-[32rem] w-64 h-80 sm:w-80 sm:h-[32rem] rounded-t-full overflow-hidden shadow-2xl border-[12px] border-white">
//             <img
//               src="/b1.jpeg"
//               alt="Mariage"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//           </div>

//           <motion.div
//             initial={{ x: 20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 1.5, duration: 1 }}
//             className="absolute -bottom-6 -right-4 bg-white p-4 shadow-xl rounded-lg rotate-3"
//           >
//             <p className="font-serif-premium text-gray-800 font-bold tracking-widest text-sm uppercase">Samedi</p>
//             <p className="font-serif-premium text-2xl text-amber-800">11 Avril 2026</p>
//           </motion.div>
//         </motion.div>

//         <div className="text-center space-y-6">
//           <motion.h2 variants={itemVariants} className="font-serif-premium text-lg tracking-[0.3em] text-gray-300 uppercase">
//             Célébration de l'Union
//           </motion.h2>

//           <motion.h1 variants={itemVariants} className="font-script text-7xl sm:text-9xl text-gray-300 my-4 drop-shadow-sm">
//             Clémence <span className="text-4xl sm:text-6xl align-middle font-serif-premium italic">&</span> Elias
//           </motion.h1>

//           <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 my-8">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "8rem" }}
//               transition={{ delay: 2, duration: 1.5 }}
//               className="h-[1px] bg-gradient-to-r from-transparent to-gray-400"
//             />
//             <motion.div
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//             >
//               <Heart className="text-red-300 fill-red-300 w-6 h-6" />
//             </motion.div>
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "8rem" }}
//               transition={{ delay: 2, duration: 1.5 }}
//               className="h-[1px] bg-gradient-to-l from-transparent to-gray-400"
//             />
//           </motion.div>

//           <motion.p variants={itemVariants} className="font-serif-premium italic text-xl sm:text-3xl text-gray-400 max-w-xl mx-auto leading-relaxed px-4">
//             "Deux âmes, un seul cœur, un chemin qui commence..."
//           </motion.p>

//           <motion.p variants={itemVariants} className="font-lora text-yellow-200 tracking-wide pt-4">
//             BAFOUSSAM, BELLE VUE, 11 AVRIL 2026
//           </motion.p>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.6 }}
//           transition={{ delay: 3, duration: 1 }}
//           className="absolute bottom-10 flex flex-col items-center gap-2"
//         >
//           <span className="font-serif-premium text-xs tracking-widest uppercase">Découvrir</span>
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Overlay Texture Papier */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
//     </motion.section>
//   );
// }

// export default Hero;