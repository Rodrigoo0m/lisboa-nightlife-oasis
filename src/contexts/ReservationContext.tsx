
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Reservation {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  data: string;
  hora: string;
  pessoas: number;
  tipoMesa: string;
  observacoes: string;
  status: 'pendente' | 'confirmada' | 'cancelada';
  createdAt: string;
}

interface ReservationContextType {
  reservations: Reservation[];
  addReservation: (reservation: Omit<Reservation, 'id' | 'status' | 'createdAt'>) => void;
  updateReservationStatus: (id: string, status: 'confirmada' | 'cancelada') => void;
  getReservationById: (id: string) => Reservation | undefined;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export const useReservations = () => {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error('useReservations must be used within a ReservationProvider');
  }
  return context;
};

export const ReservationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  // Load reservations from localStorage on mount
  useEffect(() => {
    const savedReservations = localStorage.getItem('reservations');
    if (savedReservations) {
      setReservations(JSON.parse(savedReservations));
    }
  }, []);

  // Save to localStorage whenever reservations change
  useEffect(() => {
    localStorage.setItem('reservations', JSON.stringify(reservations));
  }, [reservations]);

  const addReservation = (reservationData: Omit<Reservation, 'id' | 'status' | 'createdAt'>) => {
    const newReservation: Reservation = {
      ...reservationData,
      id: Date.now().toString(),
      status: 'pendente',
      createdAt: new Date().toISOString(),
    };
    
    setReservations(prev => [...prev, newReservation]);
    console.log('Nova reserva adicionada:', newReservation);
  };

  const updateReservationStatus = (id: string, status: 'confirmada' | 'cancelada') => {
    setReservations(prev => 
      prev.map(reservation => 
        reservation.id === id 
          ? { ...reservation, status }
          : reservation
      )
    );
    console.log(`Reserva ${id} atualizada para status: ${status}`);
  };

  const getReservationById = (id: string) => {
    return reservations.find(reservation => reservation.id === id);
  };

  const value = {
    reservations,
    addReservation,
    updateReservationStatus,
    getReservationById,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};
