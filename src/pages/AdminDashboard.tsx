
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock data - in real app, this would come from API
  const stats = {
    totalReservas: 156,
    reservasHoje: 12,
    receita: 15600,
    ocupacao: 78
  };

  const recentReservas = [
    { id: 1, nome: 'João Silva', mesa: 'VIP 1', hora: '22:00', status: 'confirmada' },
    { id: 2, nome: 'Maria Santos', mesa: 'Standard 5', hora: '23:30', status: 'pendente' },
    { id: 3, nome: 'Pedro Costa', mesa: 'Bar 2', hora: '21:45', status: 'confirmada' },
    { id: 4, nome: 'Ana Ferreira', mesa: 'VIP 2', hora: '00:15', status: 'cancelada' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmada': return 'text-green-400';
      case 'pendente': return 'text-yellow-400';
      case 'cancelada': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmada': return <CheckCircle className="w-4 h-4" />;
      case 'pendente': return <AlertCircle className="w-4 h-4" />;
      case 'cancelada': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair font-bold text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-400">
          Visão geral das operações do Strip Club Lisboa
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="luxury-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">
              Reservas Hoje
            </CardTitle>
            <Calendar className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.reservasHoje}</div>
            <p className="text-xs text-gray-400">
              +20% em relação a ontem
            </p>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">
              Total Reservas
            </CardTitle>
            <Users className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.totalReservas}</div>
            <p className="text-xs text-gray-400">
              Este mês
            </p>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">
              Receita
            </CardTitle>
            <DollarSign className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">€{stats.receita}</div>
            <p className="text-xs text-gray-400">
              +15% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">
              Taxa Ocupação
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-gold" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats.ocupacao}%</div>
            <p className="text-xs text-gray-400">
              Média semanal
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reservations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="text-white">Reservas Recentes</CardTitle>
            <CardDescription className="text-gray-400">
              Últimas reservas efetuadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReservas.map((reserva) => (
                <div key={reserva.id} className="flex items-center justify-between p-3 bg-navy-deep rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={getStatusColor(reserva.status)}>
                      {getStatusIcon(reserva.status)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{reserva.nome}</p>
                      <p className="text-sm text-gray-400">{reserva.mesa}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{reserva.hora}</p>
                    <p className={`text-sm capitalize ${getStatusColor(reserva.status)}`}>
                      {reserva.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="text-white">Ocupação por Hora</CardTitle>
            <CardDescription className="text-gray-400">
              Distribuição de reservas hoje
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { hora: '21:00 - 22:00', ocupacao: 45 },
                { hora: '22:00 - 23:00', ocupacao: 78 },
                { hora: '23:00 - 00:00', ocupacao: 92 },
                { hora: '00:00 - 01:00', ocupacao: 85 },
                { hora: '01:00 - 02:00', ocupacao: 67 },
              ].map((slot, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{slot.hora}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-navy-deep rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-crimson to-gold h-2 rounded-full"
                        style={{ width: `${slot.ocupacao}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-white font-medium">{slot.ocupacao}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
