
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const GallerySection = () => {
  const images = [
    {
      src: '/placeholder.svg',
      alt: 'Interior elegante do Lisboa Premium',
      title: 'Ambiente Sofisticado'
    },
    {
      src: '/placeholder.svg',
      alt: 'Área VIP com mesas exclusivas',
      title: 'Área VIP Exclusiva'
    },
    {
      src: '/placeholder.svg',
      alt: 'Palco principal com iluminação profissional',
      title: 'Palco Principal'
    },
    {
      src: '/placeholder.svg',
      alt: 'Bar premium com bebidas selecionadas',
      title: 'Bar Premium'
    },
    {
      src: '/placeholder.svg',
      alt: 'Área de relaxamento com sofás confortáveis',
      title: 'Área de Relaxamento'
    },
    {
      src: '/placeholder.svg',
      alt: 'Entrada principal com design moderno',
      title: 'Entrada Principal'
    }
  ];

  return (
    <section id="gallery" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-deep"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Nossa <span className="text-gradient">Galeria</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubra o ambiente sofisticado e as instalações premium do Lisboa Premium. 
            Cada detalhe foi pensado para proporcionar máximo conforto e elegância.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="luxury-card overflow-hidden hover:transform hover:scale-105 transition-all duration-500 animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson/20 to-gold/20"></div>
                  <div className="text-6xl text-white/30">📸</div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-playfair font-bold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm">Clique para ampliar</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Highlight */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-crimson-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏛️</span>
            </div>
            <h3 className="text-xl font-playfair font-bold text-white mb-3">
              Arquitetura Moderna
            </h3>
            <p className="text-gray-300">
              Design contemporâneo com elementos clássicos, criando um ambiente único e sofisticado.
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-crimson-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-playfair font-bold text-white mb-3">
              Iluminação Profissional
            </h3>
            <p className="text-gray-300">
              Sistema de iluminação de última geração que cria a atmosfera perfeita para cada momento.
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-crimson-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🎵</span>
            </div>
            <h3 className="text-xl font-playfair font-bold text-white mb-3">
              Som Premium
            </h3>
            <p className="text-gray-300">
              Sistema de som profissional que garante qualidade cristalina em todos os espetáculos.
            </p>
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="luxury-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              Quer Conhecer Pessoalmente?
            </h3>
            <p className="text-gray-300 mb-6">
              Visite-nos e descubra por si mesmo o que torna o Lisboa Premium especial. 
              A nossa equipa terá todo o prazer em recebê-lo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#reservas"
                className="inline-flex items-center justify-center px-6 py-3 bg-crimson-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Reservar Visita
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 rounded-lg font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mais Informações
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
