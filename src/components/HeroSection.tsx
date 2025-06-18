
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-luxury-gradient">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-crimson/20 via-transparent to-gold/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-crimson/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Lisboa's <span className="text-gradient">Premium</span>
            <br />
            <span className="font-dancing text-4xl md:text-6xl">Entertainment</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experimente noites inesquecíveis no coração de Lisboa. 
            Entretenimento adulto premium numa atmosfera sofisticada e elegante.
          </p>

          {/* Location and Hours */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Centro de Lisboa</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              <span>22h - 06h</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="crimson-gradient hover:opacity-90 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 animate-glow"
              onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reservar Mesa VIP
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm"
              onClick={() => document.getElementById('shows')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Espetáculos
            </Button>
          </div>

          {/* Age Restriction Notice */}
          <p className="text-sm text-gray-400 mt-8">
            +18 anos • Entrada apenas para adultos
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
