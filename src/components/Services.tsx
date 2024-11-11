import React from 'react';
import { Utensils, Leaf, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Cuisine Sur Mesure",
    description: "De la cuisine française aux saveurs du monde, nous adaptons nos menus à vos envies."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Options Dietary",
    description: "Menus végétariens, sans gluten et adaptés à vos besoins spécifiques."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Service Complet",
    description: "Livraison et installation sur place pour une expérience sans stress."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Tous Événements",
    description: "Parfait pour vos événements privés et professionnels."
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

export default function Services() {
  return (
    <section id="prestations" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Nos Prestations
          </span>
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300"
            >
              <div className="p-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 mx-auto text-orange-600"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}