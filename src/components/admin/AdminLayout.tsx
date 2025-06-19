
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ReAuthModal from './ReAuthModal';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Settings, 
  LogOut,
  Home
} from 'lucide-react';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [lastAuthTime, setLastAuthTime] = useState<number>(Date.now());
  const [showReAuthModal, setShowReAuthModal] = useState(false);
  const [targetPage, setTargetPage] = useState('');
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  // Session timeout: 30 minutes
  const SESSION_TIMEOUT = 30 * 60 * 1000;

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Calendar, label: 'Reservas', path: '/admin/reservas' },
    { icon: Users, label: 'Clientes', path: '/admin/clientes' },
    { icon: Settings, label: 'Configurações', path: '/admin/configuracoes' },
  ];

  const getPageName = (path: string) => {
    const item = menuItems.find(item => item.path === path);
    return item ? item.label : 'Área Administrativa';
  };

  const checkSessionTimeout = () => {
    const now = Date.now();
    return (now - lastAuthTime) > SESSION_TIMEOUT;
  };

  const handleNavigation = (path: string) => {
    // Se já estamos na página, não precisamos de re-autenticar
    if (location.pathname === path) {
      return;
    }

    // Verificar se a sessão expirou ou se é uma navegação para área sensível
    if (checkSessionTimeout() || path !== '/admin') {
      setTargetPage(getPageName(path));
      setPendingNavigation(path);
      setShowReAuthModal(true);
    } else {
      navigate(path);
    }
  };

  const handleReAuthSuccess = () => {
    setLastAuthTime(Date.now());
    setShowReAuthModal(false);
    if (pendingNavigation) {
      navigate(pendingNavigation);
      setPendingNavigation(null);
    }
  };

  // Verificar sessão periodicamente
  useEffect(() => {
    const interval = setInterval(() => {
      if (checkSessionTimeout() && location.pathname !== '/admin') {
        setTargetPage(getPageName(location.pathname));
        setShowReAuthModal(true);
      }
    }, 60000); // Verificar a cada minuto

    return () => clearInterval(interval);
  }, [lastAuthTime, location.pathname]);

  // Reset do timer quando há atividade
  useEffect(() => {
    const handleActivity = () => {
      if (!showReAuthModal) {
        setLastAuthTime(Date.now());
      }
    };

    document.addEventListener('mousedown', handleActivity);
    document.addEventListener('keydown', handleActivity);

    return () => {
      document.removeEventListener('mousedown', handleActivity);
      document.removeEventListener('keydown', handleActivity);
    };
  }, [showReAuthModal]);

  return (
    <div className="min-h-screen bg-luxury-gradient">
      <div className="flex">
        {/* Sidebar */}
        <Card className="w-64 min-h-screen luxury-card rounded-none border-r border-gray-700">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-crimson-gradient rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-playfair font-bold text-white">Admin Panel</h2>
                <p className="text-xs text-gray-400">Strip Club Lisboa</p>
              </div>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  className={`w-full justify-start text-gray-300 hover:text-white hover:bg-navy-deep ${
                    location.pathname === item.path ? 'bg-navy-deep text-white' : ''
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="p-4 bg-navy-deep rounded-lg mb-4">
                <p className="text-sm text-white font-medium">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.email}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Sessão ativa há {Math.round((Date.now() - lastAuthTime) / 60000)}min
                </p>
              </div>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-3" />
                Sair
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>

      {/* Re-authentication Modal */}
      <ReAuthModal
        isOpen={showReAuthModal}
        onSuccess={handleReAuthSuccess}
        targetPage={targetPage}
      />
    </div>
  );
};

export default AdminLayout;
