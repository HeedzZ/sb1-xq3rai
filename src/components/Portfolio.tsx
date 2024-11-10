import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioItems = [
  {
    title: "Mariage Élégant",
    description: "Un buffet raffiné pour 150 convives avec une sélection de mets français et internationaux.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Séminaire d'Entreprise",
    description: "Cocktail déjeunatoire healthy pour 80 personnes avec options végétariennes.",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Anniversaire VIP",
    description: "Menu personnalisé et animation culinaire pour 50 invités.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Garden Party",
    description: "Buffet champêtre et élégant pour 100 personnes avec animations culinaires.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Cocktail Corporate",
    description: "Service traiteur haut de gamme pour 200 invités avec menu international.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Portfolio() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Nos Prestations Réalisées
          </span>
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-12"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flèches de navigation personnalisées */}
        <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 -left-10 text-orange-600 text-3xl z-50">
          &lt;
        </div>
        <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 -right-10 text-orange-600 text-3xl z-50">
          &gt;
        </div>
      </div>
    </section>
  );
}
