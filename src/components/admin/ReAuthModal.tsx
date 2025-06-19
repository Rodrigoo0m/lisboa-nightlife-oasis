
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface ReAuthModalProps {
  isOpen: boolean;
  onSuccess: () => void;
  targetPage: string;
}

const ReAuthModal: React.FC<ReAuthModalProps> = ({ isOpen, onSuccess, targetPage }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.email) return;

    setIsLoading(true);

    try {
      const success = await login(user.email, password);
      if (success) {
        toast({
          title: "Acesso autorizado",
          description: `Pode agora aceder a ${targetPage}`,
        });
        setPassword('');
        onSuccess();
      } else {
        toast({
          title: "Erro de autenticação",
          description: "Password incorreta",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro durante a autenticação",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md luxury-card">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-crimson-gradient rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl font-playfair text-white">
            Autenticação Adicional
          </CardTitle>
          <CardDescription className="text-gray-300">
            Para aceder a "{targetPage}", confirme a sua password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reauth-password" className="text-gray-300">
                Password para {user?.email}
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="reauth-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-navy-deep border-gray-600 text-white placeholder:text-gray-400"
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full crimson-gradient hover:opacity-90 text-white font-semibold"
              disabled={isLoading || !password}
            >
              {isLoading ? 'Verificando...' : 'Confirmar Acesso'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReAuthModal;
