
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users, Star, Clock, Phone, Mail, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReservationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    hora: '',
    pessoas: '',
    tipoMesa: '',
    observacoes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    
    toast({
      title: "Reserva Enviada!",
      description: "A sua reserva foi enviada com sucesso. Entraremos em contacto em breve para confirmação.",
    });

    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      data: '',
      hora: '',
      pessoas: '',
      tipoMesa: '',
      observacoes: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const tableTypes = [
    { id: 'standard', name: 'Mesa Standard', price: '€35', description: 'Mesa confortável para 2-4 pessoas' },
    { id: 'vip', name: 'Mesa VIP', price: '€75', description: 'Mesa premium com serviço exclusivo' },
    { id: 'private', name: 'Área Privada', price: '€150', description: 'Espaço reservado com máxima privacidade' }
  ];

  return (
    <section id="reservas" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-navy"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Faça a Sua <span className="text-gradient">Reserva</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Reserve a sua mesa e garanta uma noite inesquecível no Lisboa Premium. 
            Confirmação rápida e atendimento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Table Types */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              Tipos de <span className="text-gradient">Mesa</span>
            </h3>
            
            <div className="space-y-4">
              {tableTypes.map((table, index) => (
                <Card 
                  key={table.id}
                  className="luxury-card hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white">{table.name}</h4>
                      <span className="text-gradient font-bold">{table.price}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{table.description}</p>
                    {table.id === 'vip' && (
                      <div className="mt-2">
                        <span className="bg-gold-gradient text-navy text-xs px-2 py-1 rounded-full font-semibold">
                          ⭐ Recomendado
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <Card className="luxury-card mt-6 animate-fade-in-up">
              <CardContent className="p-6">
                <h4 className="text-xl font-playfair font-bold text-white mb-4">
                  Contacto Direto
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-4 h-4 text-gold mr-3" />
                    <span>+351 21 123 4567</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 text-gold mr-3" />
                    <span>reservas@lisboapremium.pt</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 text-gold mr-3" />
                    <span>Terça a Domingo, 22h-06h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <Card className="luxury-card animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-white">
                  Formulário de Reserva
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome" className="text-white mb-2 block">
                        <User className="w-4 h-4 inline mr-2 text-gold" />
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        type="text"
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        className="bg-navy-deep/50 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="O seu nome"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="telefone" className="text-white mb-2 block">
                        <Phone className="w-4 h-4 inline mr-2 text-gold" />
                        Telefone *
                      </Label>
                      <Input
                        id="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        className="bg-navy-deep/50 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="+351 9xx xxx xxx"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      <Mail className="w-4 h-4 inline mr-2 text-gold" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-navy-deep/50 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="seuemail@exemplo.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="data" className="text-white mb-2 block">
                        <Calendar className="w-4 h-4 inline mr-2 text-gold" />
                        Data da Reserva *
                      </Label>
                      <Input
                        id="data"
                        type="date"
                        value={formData.data}
                        onChange={(e) => handleInputChange('data', e.target.value)}
                        className="bg-navy-deep/50 border-white/20 text-white"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="hora" className="text-white mb-2 block">
                        <Clock className="w-4 h-4 inline mr-2 text-gold" />
                        Hora Preferida *
                      </Label>
                      <Select value={formData.hora} onValueChange={(value) => handleInputChange('hora', value)}>
                        <SelectTrigger className="bg-navy-deep/50 border-white/20 text-white">
                          <SelectValue placeholder="Selecione a hora" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="22:00">22:00</SelectItem>
                          <SelectItem value="22:30">22:30</SelectItem>
                          <SelectItem value="23:00">23:00</SelectItem>
                          <SelectItem value="23:30">23:30</SelectItem>
                          <SelectItem value="00:00">00:00</SelectItem>
                          <SelectItem value="00:30">00:30</SelectItem>
                          <SelectItem value="01:00">01:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pessoas" className="text-white mb-2 block">
                        <Users className="w-4 h-4 inline mr-2 text-gold" />
                        Número de Pessoas *
                      </Label>
                      <Select value={formData.pessoas} onValueChange={(value) => handleInputChange('pessoas', value)}>
                        <SelectTrigger className="bg-navy-deep/50 border-white/20 text-white">
                          <SelectValue placeholder="Quantas pessoas?" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} pessoa{num > 1 ? 's' : ''}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="tipoMesa" className="text-white mb-2 block">
                        <Star className="w-4 h-4 inline mr-2 text-gold" />
                        Tipo de Mesa *
                      </Label>
                      <Select value={formData.tipoMesa} onValueChange={(value) => handleInputChange('tipoMesa', value)}>
                        <SelectTrigger className="bg-navy-deep/50 border-white/20 text-white">
                          <SelectValue placeholder="Escolha o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Mesa Standard (€35)</SelectItem>
                          <SelectItem value="vip">Mesa VIP (€75) ⭐</SelectItem>
                          <SelectItem value="private">Área Privada (€150)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="observacoes" className="text-white mb-2 block">
                      Observações Especiais
                    </Label>
                    <Textarea
                      id="observacoes"
                      value={formData.observacoes}
                      onChange={(e) => handleInputChange('observacoes', e.target.value)}
                      className="bg-navy-deep/50 border-white/20 text-white placeholder:text-gray-400 resize-none"
                      placeholder="Algum pedido especial ou informação adicional..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm text-gray-400">
                      <p>* Campos obrigatórios</p>
                      <p>As reservas estão sujeitas a confirmação. Entraremos em contacto no prazo de 24 horas.</p>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full crimson-gradient hover:opacity-90 transition-all duration-300 text-white font-semibold py-3 text-lg"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Enviar Reserva
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
