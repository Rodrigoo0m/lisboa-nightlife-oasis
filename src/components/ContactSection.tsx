
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Car, Navigation } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '+351 21 123 4567',
      description: 'Disponível durante horário de funcionamento'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@lisboapremium.pt',
      description: 'Resposta em 24 horas'
    },
    {
      icon: MapPin,
      title: 'Morada',
      info: 'Rua Augusta, 123',
      description: '1100-048 Lisboa, Portugal'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Terça a Domingo',
      description: '22:00 - 06:00'
    }
  ];

  const transportInfo = [
    {
      icon: Car,
      title: 'Estacionamento',
      description: 'Parque privado disponível para clientes'
    },
    {
      icon: Navigation,
      title: 'Metro',
      description: 'Estação Rossio (Linha Verde/Azul) - 5 min a pé'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-navy"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Entre em <span className="text-gradient">Contacto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para responder às suas questões e ajudar a planear a sua visita. 
            Contacte-nos através dos canais abaixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-playfair font-bold text-white mb-8">
              Informações de <span className="text-gradient">Contacto</span>
            </h3>
            
            <div className="grid gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="luxury-card hover:transform hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-crimson-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gold font-medium mb-1">{item.info}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Transport Info */}
            <h4 className="text-xl font-playfair font-bold text-white mb-4">
              Como <span className="text-gradient">Chegar</span>
            </h4>
            <div className="space-y-4">
              {transportInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <span className="font-semibold">{item.title}:</span> {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map and Location */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-playfair font-bold text-white mb-8">
              Nossa <span className="text-gradient">Localização</span>
            </h3>
            
            {/* Map Placeholder */}
            <Card className="luxury-card mb-6">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-gold/10"></div>
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-gold" />
                    <h4 className="text-xl font-semibold mb-2">Centro de Lisboa</h4>
                    <p className="text-gray-300">Rua Augusta, 123</p>
                    <p className="text-gray-300">1100-048 Lisboa</p>
                  </div>
                  
                  {/* Interactive overlay */}
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300 cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100">
                    <Button className="crimson-gradient text-white">
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Highlights */}
            <Card className="luxury-card">
              <CardContent className="p-6">
                <h4 className="text-lg font-playfair font-bold text-white mb-4">
                  Localização Privilegiada
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    No coração da Baixa Lisboeta
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Próximo ao Rossio e Chiado
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Fácil acesso por transportes públicos
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Estacionamento privado disponível
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    Ambiente discreto e seguro
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gradient">5 min</div>
                      <div className="text-gray-400 text-sm">do Metro</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient">24/7</div>
                      <div className="text-gray-400 text-sm">Segurança</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Card className="luxury-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Precisa de Ajuda Imediata?
              </h3>
              <p className="text-gray-300 mb-6">
                Para urgências ou assistência imediata durante o horário de funcionamento, 
                contacte-nos diretamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="crimson-gradient hover:opacity-90 transition-all duration-300 text-white font-semibold px-8"
                  onClick={() => window.open('tel:+351211234567')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 font-semibold px-8"
                  onClick={() => window.open('mailto:info@lisboapremium.pt')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
