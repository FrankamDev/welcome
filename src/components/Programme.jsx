// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './prog.css'; // Import du CSS ci-dessus

// gsap.registerPlugin(ScrollTrigger);

// const events = [
//   { time: "14:30", title: "L'Accueil", desc: "Rafraîchissements sous les glycines" },
//   { time: "15:30", title: "L'Union", desc: "Cérémonie d'échange des promesses" },
//   { time: "17:00", title: "Le Toast", desc: "Cocktail dinatoire et rires partagés" },
//   { time: "19:30", title: "Le Banquet", desc: "Dîner aux chandelles" },
//   { time: "22:00", title: "Le Bal", desc: "Première danse et célébration" },
// ];

// const Programme = () => {
//   const mainRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animation de la ligne avec un effet de "remplissage"
//       gsap.fromTo(".liquid-line", 
//         { scaleY: 0 },
//         { 
//           scaleY: 1, 
//           ease: "none", 
//           scrollTrigger: {
//             trigger: ".timeline-container",
//             start: "top 30%",
//             end: "bottom 70%",
//             scrub: 1.5
//           } 
//         }
//       );

//       // Animation des textes avec un effet de flottement
//       events.forEach((_, i) => {
//         gsap.from(`.item-${i}`, {
//           opacity: 0,
//           x: i % 2 === 0 ? 30 : -30,
//           blur: 10,
//           duration: 1.5,
//           scrollTrigger: {
//             trigger: `.item-${i}`,
//             start: "top 85%",
//             toggleActions: "play none none reverse"
//           }
//         });
//       });
//     }, mainRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={mainRef} className="bg-wedding-glow py-32 relative">
//       <div className="max-w-5xl mx-auto px-6">
        
//         {/* Titre avec animation de lettres */}
//         <div className="text-center mb-32 overflow-hidden">
//           <h2 className="font-serif-premium text-amber-700 tracking-[0.4em] text-sm uppercase mb-4 opacity-70">
//             Chronologie d'un rêve
//           </h2>
//           <h1 className="font-script text-7xl sm:text-9xl text-gray-800 animate-pulse-slow">
//             Le Programme
//           </h1>
//         </div>

//         <div className="timeline-container relative">
//           {/* Ligne Centrale Sophistiquée */}
//           <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2 overflow-hidden">
//             <div className="liquid-line absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-200 via-amber-600 to-amber-200 origin-top" />
//           </div>

//           <div className="space-y-32">
//             {events.map((event, index) => (
//               <div 
//                 key={index} 
//                 className={`item-${index} event-item relative flex flex-col sm:flex-row items-start sm:items-center ${
//                   index % 2 === 0 ? 'sm:flex-row-reverse' : ''
//                 }`}
//               >
//                 {/* Point d'ancrage avec impulsion */}
//                 <div className="dot-pulse absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-600 rounded-full z-20 shadow-[0_0_10px_rgba(180,140,80,0.8)]" />

//                 {/* Contenu textuel */}
//                 <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${
//                   index % 2 === 0 ? 'sm:pr-24 sm:text-right' : 'sm:pl-24 sm:text-left'
//                 }`}>
//                   <div className="inline-block group">
//                     <span className="font-serif-premium text-amber-600 text-lg tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
//                       {event.time}
//                     </span>
//                     <h3 className="event-title font-serif-premium text-4xl sm:text-6xl text-gray-900 leading-none my-4 cursor-default">
//                       {event.title}
//                     </h3>
//                     <p className="font-lora text-gray-500 text-lg italic max-w-xs ml-auto mr-0 sm:mx-0 ${index % 2 === 0 ? 'sm:ml-auto sm:mr-0' : 'sm:mr-auto sm:ml-0'}">
//                       {event.desc}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Spacer desktop */}
//                 <div className="hidden sm:block sm:w-1/2" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Signature Visuelle de Fin */}
//       <div className="mt-48 flex justify-center">
//         <div className="relative group cursor-pointer">
//           <div className="absolute inset-0 bg-amber-200 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
//           <p className="relative font-script text-4xl text-gray-400 hover:text-amber-800 transition-colors">
//             À très vite...
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Programme;


import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './prog.css';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { time: "14:30", title: "L'Accueil Floral", desc: "Jardins de la Villa", direction: "left" },
  { time: "15:30", title: "La Cérémonie", desc: "Échange des vœux éternels", direction: "right" },
  { time: "17:00", title: "Le Cocktail", desc: "Musique et bulles dorées", direction: "up" },
  { time: "19:30", title: "Le Banquet", desc: "Dîner sous les étoiles", direction: "down" },
  { time: "22:00", title: "Le Bal", desc: "Première danse enchantée", direction: "left" },
];

const Programme = () => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animation de la ligne centrale avec GSAP
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 25%",
          end: "bottom 75%",
          scrub: 1.2,
        }
      }
    );
  }, []);

  // Définition des variants Framer Motion selon la direction
  const getVariants = (direction) => ({
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  });

  return (
    <section ref={containerRef} className="bg-silk-texture py-32 px-6 overflow-hidden">
      
      {/* Header avec animation de haut en bas */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-40"
      >
        <span className="font-serif-premium text-amber-700 tracking-[0.5em] text-xs uppercase mb-4 block">Timeline</span>
        <h2 className="font-script text-7xl sm:text-9xl text-gray-800">Le Programme</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        
        {/* La Ligne de Vie (L'Or liquide) */}
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200/50 -translate-x-1/2">
          <div 
            ref={lineRef} 
            className="gold-wire absolute top-0 w-full h-full bg-gradient-to-b from-amber-200 via-amber-600 to-amber-200 origin-top"
          />
        </div>

        <div className="space-y-40 sm:space-y-52">
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={getVariants(event.direction)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`event-container relative flex items-start sm:items-center w-full ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
              }`}
            >
              {/* Le Point de Pulsation */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 bg-white border-2 border-amber-600 rounded-full shadow-[0_0_10px_rgba(180,140,80,0.5)]" />
                <motion.div 
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-amber-400 rounded-full"
                />
              </div>

              {/* Contenu textuel avec apparition multidirectionnelle */}
              <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${
                index % 2 === 0 ? 'sm:pr-24 sm:text-right' : 'sm:pl-24 sm:text-left'
              }`}>
                <div className="text-split-reveal">
                   <span className="font-serif-premium text-amber-600 text-lg tracking-widest block mb-2 opacity-80">
                    {event.time}
                  </span>
                  <h3 className="shimmer-text font-serif-premium text-4xl sm:text-6xl text-gray-900 leading-none mb-4">
                    {event.title}
                  </h3>
                  <p className="font-lora text-gray-500 text-lg italic tracking-wide max-w-sm ml-auto mr-0 sm:mx-0 ${index % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'}">
                    {event.desc}
                  </p>
                </div>
              </div>

              {/* Spacer pour l'équilibre */}
              <div className="hidden sm:block sm:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Décoratif - Apparition du bas */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-52 text-center"
      >
        <div className="h-24 w-[1px] bg-gradient-to-b from-amber-600 to-transparent mx-auto mb-8" />
        <p className="font-script text-4xl text-gray-400 italic">Deux destins, un seul chemin.</p>
      </motion.div>
    </section>
  );
};

export default Programme;