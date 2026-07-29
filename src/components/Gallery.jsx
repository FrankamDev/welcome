


// import LightGallery from "lightgallery/react";

// // Styles LightGallery (tous les plugins que tu utilises)
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-rotate.css";
// import "lightgallery/css/lg-share.css";


// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgRotate from "lightgallery/plugins/rotate";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgShare from "lightgallery/plugins/share";


// //  import "./gallery.css";
// // import Navbar from "./Navbar";

// const images = [
//   { src: "/flyer.png", alt: "Image 1" },
//   { src: "/logo-jj.png", alt: "Image 2" },
//   { src: "/3.jpeg", alt: "Image 3" },
//   { src: "/4.jpeg", alt: "Image 4" },
//   { src: "/1.jpg", alt: "Image 5" },
//   { src: "/2.jpeg", alt: "Image 6" },
//   { src: "/3.jpeg", alt: "Image 7" },
//   { src: "/4.jpeg", alt: "Image 8" },
//   { src: "/1.jpg", alt: "Image 9" },
//   { src: "/2.jpeg", alt: "Image 10" },
//   { src: "/3.jpeg", alt: "Image 11" },
//   { src: "/4.jpeg", alt: "Image 12" },
//   { src: "/1.jpg", alt: "Image 13" },
//   { src: "/2.jpeg", alt: "Image 14" },
//   { src: "/1.jpg", alt: "Image 15" },
//   { src: "/2.jpeg", alt: "Image 16" },
//   { src: "/3.jpeg", alt: "Image 17" },
//   { src: "/4.jpeg", alt: "Image 18" },
//   { src: "/1.jpg", alt: "Image 19" },
//   { src: "/2.jpeg", alt: "Image 20" },
//   { src: "/3.jpeg", alt: "Image 21" },
//   { src: "/4.jpeg", alt: "Image 22" },
//   { src: "/1.jpg", alt: "Image 23" },
//   { src: "/2.jpeg", alt: "Image 24" },
//   { src: "/3.jpeg", alt: "Image 25" },
//   { src: "/4.jpeg", alt: "Image 26" },
// ];

// export default function Gallery() {
//   return (
//     <>
//     {/* <Navbar/> */}
//     <section className="py-8 md:py-20  bg-gradient-to-b from-gray-950 to-black">
//       <div className="  px-4 sm:px-6 lg:px-8">
//         {/* Titre */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Réalisations <br/> <span>&</span> <br/> <span className="text-blue-400">Affiches</span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-400">
//             Clique sur une image pour l’agrandir
//           </p>
//         </div>

//         <LightGallery
//       speed={500}
//       plugins={[
//         lgThumbnail,
//         lgRotate,
//         lgShare,
//         lgAutoplay,
//         lgFullscreen,
//         lgZoom
//       ]}
//       >
//       {images.map((image, index) => (
//         <a className="" key={index} href={image.src}>
//           <img src={image.src} alt={image.alt} />
//         </a>
//       ))}
//     </LightGallery>
//       </div>
//     </section>
//       </>
//   );
// }





import LightGallery from "lightgallery/react";

// Styles LightGallery
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-share.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    alt: "Mariés sous les confettis",
    span: "col-span-1 md:col-span-2 row-span-2", // Image mise en valeur
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
    alt: "Alliances et bouquet",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80",
    alt: "Couple élégant",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
    alt: "Mariée dans la lumière",
  },
  {
    src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1200&q=80",
    alt: "Cérémonie en extérieur",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
    alt: "Premier regard",
    span: "col-span-1 md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
    alt: "Détails de table",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    alt: "Portrait du marié",
  },
  {
    src: "https://images.unsplash.com/photo-1515934750164-648deff7decd?w=1200&q=80",
    alt: "Mariée de dos",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
    alt: "Danse des mariés",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80",
    alt: "Bouquet de la mariée",
  },
  {
    src: "https://images.unsplash.com/photo-1515934750164-648deff7decd?w=1200&q=80",
    alt: "Moment tendre",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
    alt: "Alliances en gros plan",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    alt: "Joie des mariés",
  },
];

export default function Gallery() {
  return (
    <section className="min-h-screen py-20 md:py-28 bg-[#FAF8F5] text-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête Romantique */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-amber-800/70 tracking-[0.3em] uppercase text-xs font-semibold">
            Album Souvenir
          </span>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
            Notre Galerie D'Amour
          </h2>

          <p className="font-serif italic text-2xl md:text-3xl text-amber-900/80">
            Clémence & Elias
          </p>

          {/* Diviseur décoratif avec icône de cœur */}
          <div className="pt-2 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-amber-900/20" />
            <span className="text-amber-700 text-xs">♥</span>
            <div className="w-16 h-px bg-amber-900/20" />
          </div>

          <p className="text-stone-500 text-sm md:text-base max-w-lg mx-auto font-light pt-2">
            Chaque photo raconte un chapitre de notre journée inoubliable.
            Cliquez pour explorer nos plus doux moments.
          </p>
        </div>

        {/* Grille LightGallery dynamique */}
        <LightGallery
          speed={500}
          plugins={[
            lgThumbnail,
            lgZoom,
            lgFullscreen,
            lgRotate,
            lgAutoplay,
            lgShare,
          ]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]"
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image.src}
              data-sub-html={`<h4 class="text-white font-serif text-lg">${image.alt}</h4>`}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-stone-200 ${
                image.span || "col-span-1 row-span-1"
              }`}
            >
              {/* Photo */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                
                {/* Icône Loupe / Agrandir */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>

                {/* Légende de l'image */}
                <p className="text-white font-serif text-sm tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>

              {/* Fine bordure dorée au survol */}
              <div className="absolute inset-0 border border-amber-200/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}