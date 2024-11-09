import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-12 h-12"
      >
        <div className="absolute inset-0 bg-orange-600 rounded-full"></div>
        <div className="absolute inset-1 bg-white rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <UtensilsCrossed className="w-6 h-6 text-orange-600" />
        </div>
      </motion.div>
      <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
        La French Poke
      </span>
    </motion.div>
  );
}