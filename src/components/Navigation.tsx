
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#shows', label: 'Espetáculos' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-crimson-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-playfair font-bold text-white">
              Lisboa <span className="text-gradient">Premium</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="crimson-gradient hover:opacity-90 transition-all duration-300 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reservar Mesa
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-navy-deep/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-white hover:text-gold transition-colors border-b border-white/10 last:border-none"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="w-full mt-4 crimson-gradient hover:opacity-90 transition-all duration-300 text-white font-semibold"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reservar Mesa
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
