import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Notre équipe en cuisine"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Notre Savoir-Faire</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Chez La French Poke, nous mettons notre expertise au service de votre satisfaction. Notre équipe de professionnels passionnés crée des expériences culinaires uniques, alliant tradition française et saveurs contemporaines.
              </p>
              <p>
                Nous nous engageons à utiliser des ingrédients frais et de qualité pour préparer des plats healthy et fait maison qui raviront vos convives.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Cuisine healthy et fait maison</li>
                <li>Options végétariennes et sans gluten</li>
                <li>Service personnalisé</li>
                <li>Installation et livraison incluses</li>
              </ul>
              <p className="text-xl font-semibold text-orange-600 mt-6">
                À partir de 19,90€ par personne
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}