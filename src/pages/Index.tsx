
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ShowsSection from '@/components/ShowsSection';
import ReservationSection from '@/components/ReservationSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-gradient">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ShowsSection />
        <ReservationSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
