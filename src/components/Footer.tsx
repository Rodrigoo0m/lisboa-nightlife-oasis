
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#shows', label: 'Espetáculos' },
    { href: '#reservas', label: 'Reservas' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#contact', label: 'Contacto' }
  ];

  const legalLinks = [
    { href: '#privacy', label: 'Política de Privacidade' },
    { href: '#terms', label: 'Termos de Serviço' },
    { href: '#cookies', label: 'Política de Cookies' }
  ];

  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-crimson-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-playfair font-bold text-white">
                Lisboa <span className="text-gradient">Premium</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              O destino premium de entretenimento adulto em Lisboa. 
              Proporcionamos experiências sofisticadas e memoráveis há mais de uma década.
            </p>
            <div className="text-sm text-gray-400">
              <p>+18 anos • Entrada apenas para adultos</p>
              <p>Estabelecimento licenciado e certificado</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-playfair font-bold text-white mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-playfair font-bold text-white mb-6">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Rua Augusta, 123</p>
                  <p>1100-048 Lisboa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-gray-300">+351 21 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-gray-300">info@lisboapremium.pt</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Terça a Domingo</p>
                  <p>22:00 - 06:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal & Hours */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-playfair font-bold text-white mb-6">
              Informações Legais
            </h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="luxury-card p-4">
              <h4 className="font-semibold text-white mb-2">Horário Especial</h4>
              <p className="text-gray-300 text-sm">
                Segunda: Fechado
              </p>
              <p className="text-gray-300 text-sm">
                Feriados: Consultar disponibilidade
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} Lisboa Premium. Todos os direitos reservados.</p>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>Licença de Funcionamento: PT-LX-2024-001</p>
            <p>Estabelecimento em conformidade com a legislação portuguesa</p>
          </div>
        </div>

        {/* Age Verification Notice */}
        <div className="mt-8 p-4 bg-crimson/10 border border-crimson/20 rounded-lg">
          <p className="text-center text-white text-sm">
            <strong>AVISO:</strong> Este site contém conteúdo para adultos. 
            Deve ter 18+ anos para aceder. Beba com moderação.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
