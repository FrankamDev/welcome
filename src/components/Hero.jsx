

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { Heart } from 'lucide-react';
// import './hero.css'
// function Hero() {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);
//   const particlesRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

//     // 1. Animation des particules de fond (Bokeh)
//     gsap.to(".particle", {
//       y: "-100vh",
//       x: "random(-50, 50)",
//       opacity: "random(0.1, 0.5)",
//       duration: "random(10, 20)",
//       repeat: -1,
//       stagger: { each: 0.2, from: "random" },
//       ease: "none"
//     });

//     // 2. Révélation de l'image (Scale + Reveal)
//     tl.fromTo(imageRef.current, 
//       { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
//       { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 2, ease: "expo.inOut" }
//     );

//     // 3. Entrée du texte coordonnée
//     tl.from(".reveal-text", {
//       y: 80,
//       opacity: 0,
//       rotateX: -45,
//       stagger: 0.2,
//       duration: 1.5,
//     }, "-=1");

//     // 4. Lignes décoratives s'étirant depuis le centre
//     tl.fromTo(".line-deco", 
//       { scaleX: 0 }, 
//       { scaleX: 1, duration: 1.5, stagger: 0.2 }, 
//       "-=1"
//     );

//     // 5. Pulse infini du coeur
//     gsap.to(".heart-icon", {
//       scale: 1.2,
//       repeat: -1,
//       yoyo: true,
//       ease: "heartbeat", // On peut simuler un battement
//       duration: 0.8
//     });

//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative hero min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6]"
//     >
//       {/* Background : Particules Romantiques */}
//       <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div 
//             key={i} 
//             className="particle absolute bottom-0 w-2 h-2 bg-beige-400 rounded-full blur-sm bg-orange-200/40"
//             style={{ left: `${Math.random() * 100}%` }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        
//         {/* Cadre Image Premium */}
//         <div className="relative group mb-12">
//           <div 
//             ref={imageRef}
//             className="relative w-64 h-80 sm:w-80 sm:h-[32rem] rounded-t-full overflow-hidden shadow-2xl border-[12px] border-white"
//           >
//             <img
//               src="/b1.jpeg"
//               alt="Mariage"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//           </div>
          
//           {/* Badge Date flottant */}
//           <div className="reveal-text absolute -bottom-6 -right-4 bg-white p-4 shadow-xl rounded-lg rotate-3">
//              <p className="font-serif-premium text-gray-800 font-bold tracking-widest text-sm uppercase">Samedi</p>
//              <p className="font-serif-premium text-2xl text-amber-800">10 Avril 2026</p>
//           </div>
//         </div>

//         {/* Titre Principal */}
//         <div ref={contentRef} className="text-center space-y-6">
//           <h2 className="reveal-text font-serif-premium text-lg tracking-[0.3em] text-gray-500 uppercase">
//             Célébration de l'Union
//           </h2>
          
//           <h1 className="reveal-text font-script text-7xl sm:text-9xl text-gray-800 my-4 drop-shadow-sm">
//             Clémence <span className="text-4xl sm:text-6xl align-middle font-serif-premium italic">&</span> Elias
//           </h1>

//           {/* Décoration Centrale */}
//           <div className="flex items-center justify-center gap-6 my-8">
//             <div className="line-deco h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-gray-400" />
//             <Heart className="heart-icon text-red-300 fill-red-300 w-6 h-6" />
//             <div className="line-deco h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-gray-400" />
//           </div>

//           <p className="reveal-text font-serif-premium italic text-xl sm:text-3xl text-gray-600 max-w-xl mx-auto leading-relaxed px-4">
//             "Deux âmes, un seul cœur, un chemin qui commence..."
//           </p>

//           <p className="reveal-text font-lora text-gray-500 tracking-wide pt-4">
//             BAFOUSSAM, BELLE VUE, 10 AVRIL 2026
//           </p>
//         </div>

//         {/* Scroll Indicator Custom */}
//         <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-60">
//           <span className="font-serif-premium text-xs tracking-widest uppercase">Découvrir</span>
//           <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
//         </div>
//       </div>

//       {/* Overlay Texture Papier (Subtil) */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
//     </section>
//   );
// }

// export default Hero;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, ArrowDown } from 'lucide-react';
import './hero.css';

function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  // Parallaxe Framer Motion pour le fond
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    // UTILISATION DE GSAP CONTEXT POUR EVITER LES ERREURS NODE
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Animation des particules (Bokeh)
      gsap.to(".particle", {
        y: "-100vh",
        opacity: "random(0.1, 0.4)",
        duration: "random(15, 25)",
        repeat: -1,
        stagger: 0.5,
        ease: "none"
      });

      // 2. Révélation Image de fond (Animation douce)
      gsap.to(".hero-bg-animated", {
        scale: 1,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 3. Reveal du cadre photo central
      tl.fromTo(imageRef.current, 
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.3 },
        { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 2, ease: "expo.inOut" }
      );

      // 4. Apparition de l'étiquette (Badge) avec un petit rebond
      tl.fromTo(badgeRef.current,
        { x: 50, opacity: 0, rotate: 15 },
        { x: 0, opacity: 1, rotate: 3, duration: 1.2, ease: "back.out(1.7)" },
        "-=0.5"
      );

      // 5. Entrée du texte
      tl.from(".reveal-text", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2
      }, "-=1");

      // 6. Battement du coeur
      gsap.to(".heart-icon", {
        scale: 1.3,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, containerRef);

    return () => ctx.revert(); // Nettoyage propre
  }, []);

  return (
    <section ref={containerRef} className="hero-section min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. Image de fond Animée (Opacité réduite) */}
      <motion.div style={{ y: bgY }} className="hero-bg-animated">
        <img src="/b1.jpeg" alt="Background" className="opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/50 via-transparent to-[#FAF9F6]" />
      </motion.div>

      {/* 2. Particules Bokeh */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle absolute bottom-0 w-3 h-3 bg-amber-200/30 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="paper-overlay" />

      {/* 3. Contenu Central */}
      <div className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center">
        
        {/* Cadre Image avec Étiquette */}
        <div className="relative mb-16 sm:mb-20">
          <div ref={imageRef} className="image-frame relative w-64 h-80 sm:w-80 sm:h-[30rem] rounded-t-full overflow-hidden">
            <img src="/b1.jpeg" alt="Couple" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          
          {/* L'Étiquette (Date Badge) que tu aimes */}
          <div ref={badgeRef} className="date-badge absolute -bottom-6 -right-6 sm:-right-10">
             <p className="font-serif-premium text-gray-400 text-[10px] tracking-[0.3em] uppercase mb-1">Save the Date</p>
             <p className="font-serif-premium text-2xl sm:text-3xl text-amber-800 font-bold leading-none">10 AVRIL</p>
             <p className="font-serif-premium text-lg text-gray-700 mt-1 italic">2026</p>
          </div>
        </div>

        {/* Textes */}
        <div className="text-center">
          <motion.h2 className="reveal-text font-serif-premium text-sm tracking-[0.5em] text-amber-700/70 uppercase mb-4">
            L'Aventure Commence
          </motion.h2>
          
          <h1 className="reveal-text font-script text-7xl sm:text-[10rem] text-gray-900 leading-[0.8]">
            Clémence <span className="font-serif-premium text-3xl sm:text-5xl italic text-amber-600 px-2">&</span> Elias
          </h1>

          <div className="flex items-center justify-center gap-6 my-10">
            <div className="h-[1px] w-16 sm:w-32 bg-gray-300" />
            <Heart className="heart-icon text-amber-600 fill-amber-600/20 w-5 h-5" />
            <div className="h-[1px] w-16 sm:w-32 bg-gray-300" />
          </div>

          <p className="reveal-text font-editorial italic text-2xl sm:text-4xl text-gray-700 max-w-2xl mx-auto leading-tight">
            "Deux destins qui s'unissent pour ne former qu'un seul voyage."
          </p>
        </div>

        {/* Indicateur de Scroll */}
        <div className="absolute -bottom-10 sm:bottom-0 flex flex-col items-center gap-3">
          <span className="font-serif-premium text-[10px] tracking-[0.4em] uppercase text-gray-400">Découvrir</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-amber-700/40"
          >
            <ArrowDown size={20} strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;