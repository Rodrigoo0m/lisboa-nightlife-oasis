
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  Eye,
  Calendar,
  Clock,
  Users
} from 'lucide-react';
import { useReservations } from '@/contexts/ReservationContext';
import { useToast } from '@/hooks/use-toast';

const AdminReservas = () => {
  const { toast } = useToast();
  const { reservations, updateReservationStatus } = useReservations();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmada':
        return <Badge className="bg-green-600 hover:bg-green-700">Confirmada</Badge>;
      case 'pendente':
        return <Badge className="bg-yellow-600 hover:bg-yellow-700">Pendente</Badge>;
      case 'cancelada':
        return <Badge className="bg-red-600 hover:bg-red-700">Cancelada</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleStatusChange = (id: string, newStatus: 'confirmada' | 'cancelada') => {
    updateReservationStatus(id, newStatus);
    
    const statusText = newStatus === 'confirmada' ? 'confirmada' : 'cancelada';
    toast({
      title: "Status Atualizado",
      description: `Reserva ${statusText} com sucesso.`,
    });
  };

  const getTableTypeName = (tipoMesa: string) => {
    switch (tipoMesa) {
      case 'standard': return 'Standard';
      case 'vip': return 'VIP';
      case 'private': return 'Privada';
      default: return tipoMesa;
    }
  };

  const filteredReservas = reservations.filter(reserva => {
    const matchesSearch = reserva.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reserva.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || reserva.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalPessoas = reservations
    .filter(r => r.status === 'confirmada')
    .reduce((sum, r) => sum + r.pessoas, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair font-bold text-white mb-2">
          Gestão de Reservas
        </h1>
        <p className="text-gray-400">
          Gerir todas as reservas de mesa
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="luxury-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total</p>
                <p className="text-2xl font-bold text-white">{reservations.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-gold" />
            </div>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Confirmadas</p>
                <p className="text-2xl font-bold text-green-400">
                  {reservations.filter(r => r.status === 'confirmada').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Pendentes</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {reservations.filter(r => r.status === 'pendente').length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="luxury-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Pessoas</p>
                <p className="text-2xl font-bold text-white">{totalPessoas}</p>
              </div>
              <Users className="h-8 w-8 text-gold" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="luxury-card">
        <CardHeader>
          <CardTitle className="text-white">Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Pesquisar por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-navy-deep border-gray-600 text-white"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('all')}
                className="border-gray-600"
              >
                Todas
              </Button>
              <Button
                variant={filterStatus === 'pendente' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('pendente')}
                className="border-gray-600"
              >
                Pendentes
              </Button>
              <Button
                variant={filterStatus === 'confirmada' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('confirmada')}
                className="border-gray-600"
              >
                Confirmadas
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reservations Table */}
      <Card className="luxury-card">
        <CardHeader>
          <CardTitle className="text-white">Lista de Reservas</CardTitle>
          <CardDescription className="text-gray-400">
            {filteredReservas.length} reservas encontradas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-300">Cliente</TableHead>
                <TableHead className="text-gray-300">Data/Hora</TableHead>
                <TableHead className="text-gray-300">Mesa</TableHead>
                <TableHead className="text-gray-300">Pessoas</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReservas.length === 0 ? (
                <TableRow className="border-gray-700">
                  <TableCell colSpan={6} className="text-center text-gray-400 py-8">
                    Nenhuma reserva encontrada
                  </TableCell>
                </TableRow>
              ) : (
                filteredReservas.map((reserva) => (
                  <TableRow key={reserva.id} className="border-gray-700">
                    <TableCell>
                      <div>
                        <p className="text-white font-medium">{reserva.nome}</p>
                        <p className="text-sm text-gray-400">{reserva.email}</p>
                        <p className="text-sm text-gray-400">{reserva.telefone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-white">{reserva.data}</p>
                        <p className="text-sm text-gray-400">{reserva.hora}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-white">{getTableTypeName(reserva.tipoMesa)}</TableCell>
                    <TableCell className="text-white">{reserva.pessoas}</TableCell>
                    <TableCell>{getStatusBadge(reserva.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {reserva.status === 'pendente' && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                              onClick={() => handleStatusChange(reserva.id, 'confirmada')}
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                              onClick={() => handleStatusChange(reserva.id, 'cancelada')}
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-600"
                          title="Ver detalhes"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReservas;
