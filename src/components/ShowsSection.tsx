
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Star, Calendar } from 'lucide-react';

const ShowsSection = () => {
  const shows = [
    {
      title: 'Noite de Gala',
      time: '23:00 - 01:00',
      days: 'Sexta & Sábado',
      description: 'Espetáculo premium com as nossas melhores artistas numa performance inesquecível.',
      price: 'A partir de €50',
      featured: true
    },
    {
      title: 'Midnight Special',
      time: '01:00 - 03:00',
      days: 'Todos os dias',
      description: 'Shows intimistas com performances exclusivas em ambiente mais reservado.',
      price: 'A partir de €35',
      featured: false
    },
    {
      title: 'VIP Experience',
      time: 'Horário privado',
      days: 'Por marcação',
      description: 'Experiência privada e personalizada com serviço VIP completo.',
      price: 'Consultar preços',
      featured: true
    }
  ];

  const schedule = [
    { day: 'Terça', hours: '22:00 - 04:00', shows: 'Midnight Special' },
    { day: 'Quarta', hours: '22:00 - 04:00', shows: 'Midnight Special' },
    { day: 'Quinta', hours: '22:00 - 05:00', shows: 'Midnight Special + Late Show' },
    { day: 'Sexta', hours: '22:00 - 06:00', shows: 'Noite de Gala + Specials' },
    { day: 'Sábado', hours: '22:00 - 06:00', shows: 'Noite de Gala + Specials' },
    { day: 'Domingo', hours: '22:00 - 04:00', shows: 'Midnight Special' }
  ];

  return (
    <section id="shows" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-deep"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Nossos <span className="text-gradient">Espetáculos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Performances cuidadosamente coreografadas que combinam arte, sensualidade e entretenimento premium.
          </p>
        </div>

        {/* Shows Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {shows.map((show, index) => (
            <Card 
              key={index}
              className={`luxury-card hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up ${
                show.featured ? 'ring-2 ring-gold/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {show.featured && (
                  <div className="bg-gold-gradient text-navy font-semibold px-3 py-1 rounded-full text-sm w-fit mb-4">
                    ⭐ Destaque
                  </div>
                )}
                
                <h3 className="text-2xl font-playfair font-bold text-white mb-3">
                  {show.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 text-gold mr-2" />
                    {show.time}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 text-gold mr-2" />
                    {show.days}
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {show.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gradient">
                    {show.price}
                  </span>
                  <Button 
                    className="crimson-gradient hover:opacity-90 transition-all duration-300 text-white"
                    onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Reservar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Schedule */}
        <div className="luxury-card p-8 animate-fade-in-up">
          <h3 className="text-3xl font-playfair font-bold text-white mb-8 text-center">
            Programação <span className="text-gradient">Semanal</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="bg-navy-deep/50 p-4 rounded-lg border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gold text-lg">{item.day}</span>
                  <span className="text-gray-300 text-sm">{item.hours}</span>
                </div>
                <p className="text-gray-300 text-sm">{item.shows}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-4">
              * Programação sujeita a alterações. Para eventos especiais, consulte-nos.
            </p>
            <Button 
              className="crimson-gradient hover:opacity-90 transition-all duration-300 text-white font-semibold px-8 py-3"
              onClick={() => document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Ver Disponibilidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
