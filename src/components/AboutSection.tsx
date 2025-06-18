
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Clock, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Star,
      title: 'Experiência Premium',
      description: 'Entretenimento de alta qualidade numa atmosfera sofisticada e elegante.'
    },
    {
      icon: Users,
      title: 'Artistas Profissionais',
      description: 'Performers experientes que garantem espetáculos memoráveis todas as noites.'
    },
    {
      icon: Clock,
      title: 'Horário Flexível',
      description: 'Aberto de terça a domingo, das 22h às 06h, para a sua conveniência.'
    },
    {
      icon: Award,
      title: 'Serviço Exclusivo',
      description: 'Atendimento personalizado e serviços VIP para uma experiência única.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-navy"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Sobre <span className="text-gradient">Lisboa Premium</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Há mais de uma década a oferecer entretenimento adulto premium em Lisboa. 
            Somos referência em qualidade, elegância e profissionalismo no setor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="luxury-card hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-crimson-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-playfair font-bold text-white mb-6">
              A Nossa <span className="text-gradient">História</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Fundado em 2010, o Lisboa Premium estabeleceu-se rapidamente como o principal 
              destino de entretenimento adulto na capital portuguesa. A nossa missão é 
              proporcionar experiências únicas, combinando sensualidade, elegância e 
              sofisticação.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Localizado no coração de Lisboa, oferecemos um ambiente discreto e luxuoso, 
              com instalações modernas e um serviço impecável. Cada detalhe foi pensado 
              para garantir o máximo conforto e satisfação dos nossos clientes.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">10+</div>
                <div className="text-gray-400">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">500+</div>
                <div className="text-gray-400">Noites Memoráveis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="luxury-card p-8">
              <h4 className="text-2xl font-playfair font-bold text-white mb-6 text-center">
                O Que Nos Distingue
              </h4>
              <ul className="space-y-4">
                {[
                  'Ambiente elegante e sofisticado',
                  'Artistas profissionais e experientes',
                  'Serviço VIP personalizado',
                  'Localização privilegiada em Lisboa',
                  'Instalações modernas e confortáveis',
                  'Política de privacidade rigorosa'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
