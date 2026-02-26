

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
import { Heart, ArrowDownCircle } from 'lucide-react';
import './hero.css'; // Import du CSS ci-dessus

function Hero() {
  const containerRef = useRef(null);
  const mediaRef = useRef(null); // Ref pour la vidéo/image de fond

  // Parallaxe pour l'image de fond
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animation d'entrée du cadre photo
    tl.fromTo(
      ".photo-frame",
      { opacity: 0, scale: 0.7, y: 60, rotation: -6 },
      { opacity: 1, scale: 1, y: 0, rotation: 0, duration: 1.6, ease: "expo.out" },
      0.8 // Commence après 0.8s
    );

    // Titre (Clémence & Elias)
    tl.fromTo(
      ".hero-title-name",
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4 },
      "-=1.0" // Superpose à l'animation précédente
    );

    // Sous-titre / citation
    tl.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2 },
      "-=0.8"
    );

    // Date et lignes
    tl.fromTo(
      ".hero-date-elements",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.0 },
      "-=0.6"
    );

    // Battement du cœur infini
    gsap.to(".heart-icon-pulse", {
      scale: 1.15,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="hero-section min-h-screen relative flex items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20"
    >
      {/* Conteneur de l'image/vidéo de fond avec parallaxe */}
      <motion.div 
        style={{ y: backgroundY }}
        className="hero-background-media"
      >
        {/* Choisis entre une vidéo ou une image statique */}
        <video 
          src="/path/to/your/animated-background.mp4" // Remplace par ta vidéo ou GIF
          autoPlay 
          loop 
          muted 
          playsInline 
          className="object-cover"
          poster="/path/to/your/fallback-image.jpg" // Image de secours pour les navigateurs qui ne supportent pas la vidéo
        >
          {/* Fallback pour les navigateurs qui ne supportent pas <video> */}
          <img src="/path/to/your/fallback-image.jpg" alt="Beautiful wedding background" /> 
        </video>
      </motion.div>

      {/* Overlay pour l'opacité et la teinte */}
      <div className="hero-overlay" />
      {/* Optionnel : Overlay de grain de film pour une touche vintage */}
      <div className="film-grain-overlay" />

      {/* Contenu principal */}
      <div className="relative z-10 space-y-10 sm:space-y-14 max-w-4xl w-full text-white">
        {/* Cadre photo ovale */}
        <div className="photo-frame relative mx-auto w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[28rem] overflow-hidden rounded-[40%] border-8 border-white/20 shadow-2xl bg-white/10 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1974&q=80" // Remplace par une photo de couple
            alt="Clémence & Elias"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center px-6">
            <p className="font-serif-premium text-sm tracking-[0.4em] uppercase opacity-70 mb-2">
              Nous nous marions !
            </p>
            <h1 className="hero-title-name text-5xl sm:text-6xl md:text-7xl font-script tracking-wide drop-shadow-2xl">
              Clémence & Elias
            </h1>
          </div>
        </div>

        {/* Date + décorations */}
        <div className="hero-date-elements space-y-8">
          <div className="flex items-center justify-center gap-5 sm:gap-8 opacity-80">
            <div className="h-px w-20 sm:w-32 bg-white/40" />
            <Heart className="heart-icon-pulse text-rose-200 w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" strokeWidth={0.8} />
            <div className="h-px w-20 sm:w-32 bg-white/40" />
          </div>

          <p className="text-4xl sm:text-5xl md:text-6xl font-serif-premium text-white tracking-wide drop-shadow-lg">
            12 . 12 . 2026
          </p>

          <p className="hero-subtitle text-lg sm:text-xl font-lora text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Rejoignez-nous à Bafoussam pour célébrer notre union dans un moment magique.
          </p>
        </div>

        {/* Petit indicateur scroll avec icône */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm flex flex-col items-center"
        >
          <span className="font-serif-premium tracking-widest uppercase mb-2">Découvrir</span>
          <ArrowDownCircle strokeWidth={1} size={24} />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;