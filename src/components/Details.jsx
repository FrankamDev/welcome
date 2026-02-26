import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, Users, Heart } from 'lucide-react';
import './detail.css';

gsap.registerPlugin(ScrollTrigger);

const details = [
  {
    icon: CalendarDays,
    title: "La Date",
    text: "Samedi 10 Avril 2026",
    direction: "left", 
  },
  {
    icon: Clock,
    title: "L'Instant",
    text: "Vœux à 15h00\nRéception à 19h00",
    direction: "right", 
  },
  {
    icon: MapPin,
    title: "Le Lieu",
    text: "Bafoussam, BelleVue\nDomaine des Étoiles",
    direction: "up", 
  },
  {
    icon: Users,
    title: "Dress Code",
    text: "Chic & Élégant\nUne touche de doré",
    direction: "down",
  },
];

function Details() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "bottom 60%",
          scrub: 1.5,
        }
      }
    );
  }, []);

  // Variants Framer Motion pour les 4 directions + Scale
  const itemVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      scale: direction === "down" ? 0.8 : 1,
      filter: "blur(10px)",
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier pour un effet "luxe"
      }
    }
  };

  return (
    <section ref={sectionRef} className="details-bg relative py-24 sm:py-40 px-6 overflow-hidden">
      
      {/* Ligne Centrale Artistique */}
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2">
        <div ref={lineRef} className="gold-path absolute top-0 w-full h-full origin-top" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-24 sm:mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            className="font-serif text-amber-800 tracking-[0.4em] text-xs uppercase block mb-4"
          >
            Informations Pratiques
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-script text-6xl sm:text-8xl text-gray-900 luxury-title"
          >
            Détails
          </motion.h2>
        </div>

        <div className="space-y-24 sm:space-y-40 relative">
          {details.map((detail, i) => (
            <motion.div
              key={i}
              custom={detail.direction}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex items-start sm:items-center w-full ${
                i % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
              }`}
            >
              {/* Le Point d'Ancrage (Heart pulse) */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                 <div className="w-2 h-2 bg-amber-600 rounded-full shadow-[0_0_12px_rgba(180,140,80,0.8)]" />
              </div>

              {/* Bloc de contenu */}
              <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                i % 2 === 0 ? 'sm:pr-20 sm:text-right' : 'sm:pl-20 sm:text-left'
              }`}>
                <div className="group transition-transform duration-500 hover:-translate-y-1">
                  <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'}`}>
                    <detail.icon className="w-5 h-5 text-amber-700/50" strokeWidth={1.2} />
                    <h3 className="font-editorial text-2xl sm:text-4xl text-gray-900">
                      {detail.title}
                    </h3>
                  </div>
                  <p className="font-lora text-gray-500 text-base sm:text-xl leading-relaxed whitespace-pre-line italic">
                    {detail.text}
                  </p>
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden sm:block sm:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Note Finale */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 text-center"
        >
          <Heart className="mx-auto text-amber-200 w-8 h-8 mb-6 animate-pulse" fill="currentColor" />
          <p className="font-lora text-gray-400 text-sm sm:text-base tracking-[0.2em] uppercase">
            Hâte de partager ce moment avec vous
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Details;