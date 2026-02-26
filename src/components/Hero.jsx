

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Heart } from 'lucide-react';

function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Animation des particules de fond (Bokeh)
    gsap.to(".particle", {
      y: "-100vh",
      x: "random(-50, 50)",
      opacity: "random(0.1, 0.5)",
      duration: "random(10, 20)",
      repeat: -1,
      stagger: { each: 0.2, from: "random" },
      ease: "none"
    });

    // 2. Révélation de l'image (Scale + Reveal)
    tl.fromTo(imageRef.current, 
      { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
      { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 2, ease: "expo.inOut" }
    );

    // 3. Entrée du texte coordonnée
    tl.from(".reveal-text", {
      y: 80,
      opacity: 0,
      rotateX: -45,
      stagger: 0.2,
      duration: 1.5,
    }, "-=1");

    // 4. Lignes décoratives s'étirant depuis le centre
    tl.fromTo(".line-deco", 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 1.5, stagger: 0.2 }, 
      "-=1"
    );

    // 5. Pulse infini du coeur
    gsap.to(".heart-icon", {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "heartbeat", // On peut simuler un battement
      duration: 0.8
    });

  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6]"
    >
      {/* Background : Particules Romantiques */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle absolute bottom-0 w-2 h-2 bg-beige-400 rounded-full blur-sm bg-orange-200/40"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
        
        {/* Cadre Image Premium */}
        <div className="relative group mb-12">
          <div 
            ref={imageRef}
            className="relative w-64 h-80 sm:w-80 sm:h-[32rem] rounded-t-full overflow-hidden shadow-2xl border-[12px] border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
              alt="Mariage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
          {/* Badge Date flottant */}
          <div className="reveal-text absolute -bottom-6 -right-4 bg-white p-4 shadow-xl rounded-lg rotate-3">
             <p className="font-serif-premium text-gray-800 font-bold tracking-widest text-sm uppercase">Samedi</p>
             <p className="font-serif-premium text-2xl text-amber-800">12 Déc 2026</p>
          </div>
        </div>

        {/* Titre Principal */}
        <div ref={contentRef} className="text-center space-y-6">
          <h2 className="reveal-text font-serif-premium text-lg tracking-[0.3em] text-gray-500 uppercase">
            Célébration de l'Union
          </h2>
          
          <h1 className="reveal-text font-script text-7xl sm:text-9xl text-gray-800 my-4 drop-shadow-sm">
            Clémence <span className="text-4xl sm:text-6xl align-middle font-serif-premium italic">&</span> Elias
          </h1>

          {/* Décoration Centrale */}
          <div className="flex items-center justify-center gap-6 my-8">
            <div className="line-deco h-[1px] w-16 sm:w-32 bg-gradient-to-r from-transparent to-gray-400" />
            <Heart className="heart-icon text-red-300 fill-red-300 w-6 h-6" />
            <div className="line-deco h-[1px] w-16 sm:w-32 bg-gradient-to-l from-transparent to-gray-400" />
          </div>

          <p className="reveal-text font-serif-premium italic text-xl sm:text-3xl text-gray-600 max-w-xl mx-auto leading-relaxed px-4">
            "Deux âmes, un seul cœur, un chemin qui commence..."
          </p>

          <p className="reveal-text font-lora text-gray-500 tracking-wide pt-4">
            BAFOUSSAM, CAMEROUN
          </p>
        </div>

        {/* Scroll Indicator Custom */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-60">
          <span className="font-serif-premium text-xs tracking-widest uppercase">Découvrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </div>

      {/* Overlay Texture Papier (Subtil) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
    </section>
  );
}

export default Hero;