
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Clock, DollarSign, Shield } from 'lucide-react';

const AdminConfiguracoes = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair font-bold text-white mb-2">
          Configurações
        </h1>
        <p className="text-gray-400">
          Configurações gerais do sistema
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              Horários de Funcionamento
            </CardTitle>
            <CardDescription className="text-gray-400">
              Configurar horários de abertura e fecho
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-navy-deep rounded-lg">
                <span className="text-white">Segunda a Quinta</span>
                <span className="text-gray-300">22:00 - 04:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-navy-deep rounded-lg">
                <span className="text-white">Sexta e Sábado</span>
                <span className="text-gray-300">22:00 - 06:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-navy-deep rounded-lg">
                <span className="text-white">Domingo</span>
                <span className="text-gray-300">Fechado</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gold" />
              Preços das Mesas
            </CardTitle>
            <CardDescription className="text-gray-400">
              Configurar preços por tipo de mesa
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-navy-deep rounded-lg">
                <span className="text-white">Mesa VIP</span>
                <span className="text-gold font-bold">€150</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-navy-deep rounded-lg">
                <span className="text-white">Mesa Standard</span>
                <span className="text-gold font-bold">€75</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-navy-deep rounded-lg">
                <span className="text-white">Mesa Bar</span>
                <span className="text-gold font-bold">€50</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-gold" />
              Configurações Gerais
            </CardTitle>
            <CardDescription className="text-gray-400">
              Configurações do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Settings className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">
                Configurações detalhadas em desenvolvimento
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              Segurança
            </CardTitle>
            <CardDescription className="text-gray-400">
              Configurações de segurança e acesso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Shield className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">
                Configurações de segurança em desenvolvimento
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminConfiguracoes;
