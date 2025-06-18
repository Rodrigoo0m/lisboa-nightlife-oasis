
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, TrendingUp, Star } from 'lucide-react';

const AdminClientes = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair font-bold text-white mb-2">
          Gestão de Clientes
        </h1>
        <p className="text-gray-400">
          Base de dados e análise de clientes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="luxury-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">
              Total Clientes
            </CardTitle>
            <Users className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2,847</div>
            <p className="text-xs text-gray-400">
              +12% este mês
            </p>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">
              Novos Clientes
            </CardTitle>
            <UserPlus className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">156</div>
            <p className="text-xs text-gray-400">
              Este mês
            </p>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">
              Clientes Ativos
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,234</div>
            <p className="text-xs text-gray-400">
              Últimos 30 dias
            </p>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">
              Satisfação
            </CardTitle>
            <Star className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">4.8</div>
            <p className="text-xs text-gray-400">
              Avaliação média
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="luxury-card">
        <CardHeader>
          <CardTitle className="text-white">Base de Dados de Clientes</CardTitle>
          <CardDescription className="text-gray-400">
            Funcionalidade em desenvolvimento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Gestão de Clientes
            </h3>
            <p className="text-gray-400 mb-6">
              Esta funcionalidade incluirá lista detalhada de clientes, histórico de reservas, preferências e análises.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminClientes;
