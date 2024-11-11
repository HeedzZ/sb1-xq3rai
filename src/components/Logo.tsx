import { motion } from 'framer-motion';
import logoImage from '../images/logo.png';

export default function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-5" // Augmente l'espace entre le logo et le texte
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-28 h-28" // Augmente encore la taille du logo
      >
        <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
      </motion.div>
      <span className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
        La French Poke
      </span>
    </motion.div>
  );
}

